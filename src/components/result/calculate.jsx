import React, { useState } from "react";
import classes from "./result.module.css";

const Calculate = () => {
    let [calcValue, setValue] = useState(0);

    const handleCalculate = () => {
        let bmi = 30;
        setValue((calcValue = bmi));
    };
    return (
        <div>
            <div className={classes.btnWrapper}>
                <button onClick={handleCalculate} className={classes.calculate}>
                    calculate
                </button>
            </div>
            <p className="result">
                <h4>Your BMI = {calcValue}</h4>
            </p>
        </div>
    );
};
export default Calculate;
