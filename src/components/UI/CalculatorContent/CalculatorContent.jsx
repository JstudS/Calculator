import React, { useContext } from "react";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { ValuesContext } from "../../../context";
import { buttonsRightArray, numbersFirstRow, numbersFourthRow, numbersSecondRow, numbersThirdRow } from "../../../utils/consts";
import useCalculatorLogic from "../../../hooks/calculatorLogic";

const CalculatorContent = () => {
    const {valueToShow, 
        storedExp, 
        visible, 
        setVisible
    } = useContext(ValuesContext)

    const {signsZeroCheck, 
        buttonsUpperArray, 
        handleOperationButtons, 
        createNumbersRow, 
        zeroOperationValue, 
        equalsCheck
    } = useCalculatorLogic()

    return (    
        <div className="calculator-content">
            <div className="stored-icon" onClick={() => setVisible(!visible)}>
                <PiClockCounterClockwiseFill />
            </div>
            <div className="results-area stored">{ storedExp.length < 1 ? 'Stored Expressions': storedExp[storedExp.length - 1]}</div>
            
            <hr />

            <div className="results-area value" >{valueToShow === "" ? <div style={{fontStyle: "italic"}}>Enter the number</div> : valueToShow}</div>

            <main>
                <div className="btns-upper active">
                    {buttonsUpperArray.map((el, index) => {
                        return <div onClick={handleOperationButtons(el.args[0], el.args[1])} key={index}>{el.sign}</div>
                    })}
                </div>
                    <table className="numbers-content">
                        <tbody>
                             {createNumbersRow(numbersFirstRow, 'firstrow')}
                             {createNumbersRow(numbersSecondRow, 'secondrow')}
                             {createNumbersRow(numbersThirdRow, 'thirdrow')}
                             {createNumbersRow(numbersFourthRow, 'fourthrow')}
                        </tbody>
                    </table>
                <div className="btns-right-content active">
                    {buttonsRightArray.map((el, index) => {
                        if(el.sign === '='){
                            return <div className="btn-right" onClick={handleOperationButtons(valueToShow.length, equalsCheck)} key={index}>
                                {el.component}
                            </div>
                        }
                        return <div className="btn-right" onClick={handleOperationButtons(signsZeroCheck, zeroOperationValue(`${el.sign}`))} key={index}>
                            {el.component}
                        </div>
                    })}
                </div>  
            </main>
        </div>
    )
}

export default CalculatorContent