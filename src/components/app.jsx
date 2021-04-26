import React from "react";
import Header from './header/header'
import Body from './body/body';
import classes from './app.module.css'


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
