import validator from "validator";
import React from "react";
import validationMessage, {
    STRONG_EMAIL_REGEXP,
    genErrorMessage,
    PHONE_PATTERN,
} from "../../shared/constants/ValidationMessage";
import { genLabel } from "../constants/AppLabel";
// const required = (value, props) => {
//   if (!value.toString().trim().length) {
//     // We can return string or jsx as the 'error' prop for the validated Component
//     return (
//       <span className='error'>
//         {validationMessage.common.required(props.label)}
//       </span>
//     )
//   }
// }
const required = (value, props) => {
    if (props.disabled) return null;
    if (value !== undefined && !value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return (
            <span className="error">
                {genErrorMessage(props.label, "required")}
            </span>
        );
    }
};
const lengthRange = (value, props) => {
    if (
        value &&
        !validator.isLength(value, { min: props.min, max: props.max })
    ) {
        return (
            <span className="error">
                {genErrorMessage(props.label, "minMax", props.min, props.max)}
            </span>
        );
    }
};

const number = (value, props) => {
    if (value && !validator.isInt(value)) {
        return (
            <span className="error">
                {genErrorMessage(props.label, "number")}
            </span>
        );
    }
};
const alphaNumeric = (value, props) => {
    if (value && !validator.isAlphanumeric(value)) {
        return (
            <span className="error">
                {genErrorMessage(props.label, "valid")}
            </span>
        );
    }
};
const alphabets = (value, props) => {
    if (value && !validator.isAlpha(value)) {
        return (
            <span className="error">
                {genErrorMessage(props.label, "valid")}
            </span>
        );
    }
};
const alphaSpace = (value, props) => {
    if (value) {
        const pattern = /^[a-zA-Z ]*$/;
        if (!pattern.test(value)) {
            return (
                <span className="error">
                    {genErrorMessage(props.label, "valid")}
                </span>
            );
        }
    }
};
const phone = (value, props) => {
    if (value) {
        if (!value.match(PHONE_PATTERN)) {
            return (
                <span className="error">
                    {genErrorMessage(props.label, "valid")}
                </span>
            );
        }
    }
};
const emailAndPhone = (value, props) => {
    if (value && isNaN(value)) {
        const emailTest = STRONG_EMAIL_REGEXP;
        if (!value.match(emailTest)) {
            return (
                <span className="error">
                    {genLabel("commonError", "validEMail")}
                </span>
            );
        }
    } else {
        if (!value.match(PHONE_PATTERN)) {
            return (
                <span className="error">
                    {genLabel("commonError", "validPhone")}
                </span>
            );
        }
    }
};
const valueBetween = (value, props) => {
    if (value && (value > props.max || value < props.min)) {
        return (
            <span className="error">
                {genErrorMessage(
                    props.label,
                    "valueRange",
                    props.min,
                    props.max
                )}
            </span>
        );
    }
};

const email = (value, props) => {
    if (!validator.isEmail(value)) {
        return (
            <span className="error">
                {genErrorMessage(props.label, "valid")}
            </span>
        );
    }
};

const lt = (value, props) => {
    // get the maxLength from component's props
    if (!value.toString().trim().length > props.maxLength) {
        // Return jsx
        return (
            <span className="error">
                The value exceeded {props.maxLength} symbols.
            </span>
        );
    }
};

const password = (value, props, components) => {
    // NOTE: Tricky place. The 'value' argument is always current component's value.
    // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
    // But if we're changing 'confirm' component - the condition will always be true
    // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
    if (value !== components["confirm"][0].value) {
        // components['password'][0].value !== components['confirm'][0].value
        // 'confirm' - name of input
        // components['confirm'] - array of same-name components because of checkboxes and radios
        return <span className="error">Passwords are not equal.</span>;
    }
};

export const isFormTouched = () => {
    let allFields = document.getElementsByClassName("react-form-input"),
        isTouched = false;
    allFields.forEach((field) => {
        if (field.getAttribute("dataistouched") === "true") isTouched = true;
    });
    return isTouched;
};

const validators = {
    required,
    email,
    lt,
    password,
    lengthRange,
    number,
    valueBetween,
    alphaNumeric,
    alphabets,
    phone,
    emailAndPhone,
    alphaSpace,
};
export default validators;
