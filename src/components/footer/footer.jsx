import React from "react";
import classes from "./footer.module.css";

const Footer = (props) => {
    return (
        <div>
            <div className={classes.result}>
                <h4>
                    Result=
                    <span className={classes.result_display}>{props.bmi}</span>
                </h4>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>condition</th>
                            <th>range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>under weight</td>
                            <td>less than 18.6</td>
                        </tr>
                        <tr>
                            <td>normal range</td>
                            <td>18.6 to 24.9</td>
                        </tr>
                        <tr>
                            <td>overweight</td>
                            <td>greater than 24.9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Footer;
