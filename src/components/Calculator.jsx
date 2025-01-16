import React, { useState } from "react";
import StoredBox from "./UI/StoredBox/StoredBox";
import MyModal from "./UI/MyModal/MyModal";
import { ValuesContext } from "../context";
import CalculatorContent from "./UI/CalculatorContent/CalculatorContent";

const Calculator = (props) => {
const [valueToShow, setValueToShow] = useState('0')
const [counter, setCounter] = useState(0)
const [storedExp, setStoredExp] = useState([])
const [visible, setVisible] = useState(false)

return  (
    <ValuesContext.Provider value={{
        valueToShow,
        setValueToShow,
        storedExp,
        setStoredExp,
        counter,
        setCounter,
        visible,
        setVisible
    }}>
        <div>
            <MyModal>
                <StoredBox storedExp={storedExp} setValueToShow={setValueToShow}/>
            </MyModal>
            
            <CalculatorContent />
        </div>
    </ValuesContext.Provider>

)  
}

export default Calculator