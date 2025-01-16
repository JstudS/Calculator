import React, { useContext } from "react";
import cl from './MyModal.module.css'
import { ValuesContext } from "../../../context";

const MyModal = ({children}) => {
    const {visible} = useContext(ValuesContext)
    const rootClasses = [cl.myModal]
    if(visible){
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            {children}
        </div>
    )
}

export default MyModal