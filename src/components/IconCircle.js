import React from "react";

function IconCircle(props) {
    const { color, icon, size, fontsize, image } = props;

    const colorCircle = {
        width: `${size}`,
        height: `${size}`,
        borderRadius: "50%",
        background: `${color}`,
        margin: 0,
        padding: 0,
        color: "#FFF",
        textAlign: "center",
        fontSize: `${fontsize}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const image_style = {
        height: "90%",
        maxWidth: `${size}`,
    };
    console.log(image);
    return (
        <span style={colorCircle} className="iconCircle">
            {icon ? <i className={`icon ${icon}`}></i> : null}
            {image ? <img src={image} style={image_style} /> : null}
        </span>
    );
}

export default IconCircle;
