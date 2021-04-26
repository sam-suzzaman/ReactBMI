import React from "react";
import classes from "./input.module.css";

const Input = (props) => {
    const handleFun = (e) => {
        console.log("hello change height");
    };
    return (
        <p className={classes.top}>
            <label htmlFor="inputValue">{props.text}</label>
            <input type="text" id="inputValue" onChange={handleFun} />
        </p>
    );
};

export default Input;
