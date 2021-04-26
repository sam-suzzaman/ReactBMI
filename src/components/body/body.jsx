import React from "react";
import Input from "../input/input";
import Calculate from "../result/calculate";

const Body = () => {
    return (
        <div>
            <Input text="Height In CM" />
            <Input text="Weight In KG" />
            <Calculate />
        </div>
    );
};
export default Body;
