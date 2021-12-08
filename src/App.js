import React, { useState } from "react";
import Button from "./components/Button";
import "./App.css";

const App = () => {
    const [bgColor, setBgColor] = useState("#fff");

    const style = {
        backgroundColor: bgColor
    };

    const changeColor = (color) => {
        setBgColor(color);
    };

    return (
        <div className="App">
            <div className="background" style={style}></div>
            <div className="App__wrapper">
                <Button text="Red" color="red" inverted="true" changeColor={changeColor} bg={{backgroundImage: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)"}}/>
                <div className="reset" onClick={()=>{setBgColor("#fff")}}>Reset</div>
                <Button text="Blue" color="blue" changeColor={changeColor} bg={{backgroundImage: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)"}}/>
            </div>
        </div>
    );
};

export default App;
