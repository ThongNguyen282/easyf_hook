import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";
ColorBox.propTypes = {};

const getRandomColor = () => {
    const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
    const randomIndex = Math.trunc(Math.random() * 5);
    console.log(COLOR_LIST[randomIndex]);
    return COLOR_LIST[randomIndex];
};

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem("box_color") || "deeppink";
        return initColor;
    });
    const handleBoxClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem("box_color", newColor);
    };
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => {
                handleBoxClick();
            }}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;
