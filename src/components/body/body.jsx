import React, { useState } from "react";
import Footer from "../footer/footer";
import classes from "./body.module.css";

const Body = () => {
    let [heightValue, setHeight] = useState();
    let [weightValue, setWeight] = useState();
    let [bmiValue, setBMI] = useState(0);

    const handleHeight = (e) => {
        e.preventDefault();
        setHeight((heightValue = e.target.value));
    };
    const handleWeight = (e) => {
        e.preventDefault();
        setWeight((weightValue = e.target.value));
    };

    const calcValue = (e) => {
        e.preventDefault();
        let ht = Number(heightValue);
        let wt = Number(weightValue);

        if (isNaN(ht) && isNaN(wt)) {
            setBMI(
                (bmiValue = " Please Enter Both The Height And Weight Value")
            );
        } else if (ht === "" || ht < 0 || isNaN(ht)) {
            setBMI((bmiValue = "Please Enter the Valid Height"));
        } else if (wt === "" || wt < 0 || isNaN(wt)) {
            setBMI((bmiValue = "Please Enter the Valid Weight"));
        } else {
            let bmi = (wt / ((ht * ht) / 10000)).toFixed(2);
            setBMI((bmiValue = bmi));
        }
    };

    return (
        <div>
            <form>
                <p className={classes.top}>
                    <label htmlFor="height">Height in CM</label>
                    <input
                        type="text"
                        id="height"
                        onChange={handleHeight}
                        value={heightValue}
                    />
                </p>
                <p className={classes.btm}>
                    <label htmlFor="weight">Weight in KG</label>
                    <input
                        type="text"
                        id="weight"
                        onChange={handleWeight}
                        value={weightValue}
                    />
                </p>
                <div className={classes.btn_wrapper}>
                    <button className={classes.calculate} onClick={calcValue}>
                        calculate
                    </button>
                </div>
            </form>
            <Footer bmi={bmiValue} />
        </div>
    );
};

export default Body;
