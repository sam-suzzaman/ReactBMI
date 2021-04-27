import React from "react";
import Header from "./header/header";
import classes from '../components/app.module.css'
import Body from "./body/body";

const App = () => {
    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <Header />
                <Body/>
            </div>
        </div>
    );
};

export default App;
