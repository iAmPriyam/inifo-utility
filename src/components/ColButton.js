import React from "react";

function ColButton(props) {
    const {
        color,
        children,
        onClick,
        disabled,
        padding,
        className = "",
        type,
        hasErrors,
    } = props;

    const holder = {
        background: `${color}`,
        padding: `${padding}`,
    };

    return (
        <button
            style={holder}
            type={type}
            className={`col-button ${className}`}
            onClick={onClick}
            // disabled={disabled}
            disabled={(type === "submit" && hasErrors) || disabled}
        >
            <span>{children}</span>
        </button>
    );
}

export default ColButton;
