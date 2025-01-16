import React, { useContext } from "react";
import { ValuesContext } from "../../../context";

const StoredBox = () => {
    const {storedExp, setValueToShow} = useContext(ValuesContext)
    return (
        <div>
            <div className="stored-box">
                <div className="stored-column">{ storedExp.length < 1 ? 'Stored Expressions': storedExp.map((el, index) => {
                    return (
                        <div className="stored-row" key={index}>
                            <div className="stored-value" onClick={() => setValueToShow(el)}>
                                {el}
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default StoredBox