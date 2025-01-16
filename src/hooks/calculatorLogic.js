import { useContext } from "react"
import { signs } from "../utils/consts"
import { ValuesContext } from "../context"
import maxNumbers from "../utils/formulas/maxNumbers"
import remove from "../utils/formulas/remove"
import intoPercent from "../utils/formulas/intoPercent"
import { FaLongArrowAltLeft } from "react-icons/fa"
import calculation from "../utils/formulas/calculation"
import CustomButton from "../components/CustomButton"

export default function useCalculatorLogic() {

    const {valueToShow, 
        setValueToShow, 
        storedExp, 
        setStoredExp, 
        counter, 
        setCounter, 
    } = useContext(ValuesContext)
   
    const signsCheck = (signs.includes(valueToShow.at(valueToShow.length - 2)) && signs.includes(valueToShow.at(valueToShow.length - 1))) || signs.includes(valueToShow.at(valueToShow.length - 1))
    const zeroCheck = valueToShow === '0' || valueToShow === ''
    const signsZeroCheck = signsCheck ? counter : 0

    const storedExpressions = (result) => {
        if(result === '0' && undefined && "NaN") return 
        setStoredExp([...storedExp, result])
    }

    const numberCheck = (event) => {
        return valueToShow === '0' ? event.target.innerHTML : valueToShow + event.target.innerHTML
    }

    const signOperation = (sign) => {
        if(sign === '.') return signs.includes(valueToShow.at(valueToShow.length - 1)) ? valueToShow : valueToShow + '.'
        return signsCheck ? valueToShow.slice(0, valueToShow.length - 3) + sign : valueToShow + sign
    } 

    const dotCheck = (callback) => {
        const stringCheck = valueToShow.slice(-(counter))
        if(stringCheck.includes('.')){
            setValueToShow(valueToShow)
        } else {
            setValueToShow(callback)
        }
    }

    const handleNumbers = (count, dot) => (event) => {
        if(dot){
            dotCheck(zeroCheck ? '0.' : signOperation('.'))
            return
        }
        if(maxNumbers(count)){
            setValueToShow(numberCheck(event))
        } else {
            setValueToShow(valueToShow)
        }
        setCounter(count)
    }

    const percentCheck = () => {
        if(signsCheck) {
            return remove(valueToShow)
        } else {
            return intoPercent(valueToShow, storedExpressions)
        }
    } 
    const buttonsUpperArray = [{sign: '%', args: [valueToShow.length, percentCheck]}, {sign: <FaLongArrowAltLeft />, args: [counter - 1, remove(valueToShow)]}, {sign: 'C', args: [0, '0']}] 

    const equalsCheck = () => {
        if(signsCheck) {
            return remove(valueToShow)
        } 
        if(valueToShow === ''){
            return '0'
        } else {
            return calculation(valueToShow, storedExpressions)
        }
    }
    const zeroOperationValue = (sign) => zeroCheck ? `0 ${sign} ` : signOperation(` ${sign} `)

    const handleOperationButtons = (counter, showValue) => () => {
        setValueToShow(showValue)
        setCounter(counter)
    }
    
    const counterCheck = counter < 12 ? counter + 1 : 12
    const createNumbersRow = (numbersArray, rowClass) => {
        return (
            <tr className={`numbers ${rowClass} active`}>
                {numbersArray.map((el, index) => {
                    return <CustomButton number={el} onPress={handleNumbers(counterCheck)} key={index}/>
                 })}
            </tr>)
    }

    return {signsZeroCheck, buttonsUpperArray, handleOperationButtons, createNumbersRow, zeroOperationValue, equalsCheck}

}
