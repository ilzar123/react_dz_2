import {useState} from "react";


const Input = ({input, inputAdd}) => {


    return (
        <input type="text" value={input} onChange={inputAdd} placeholder="Search..." />
    )
}


export default Input;