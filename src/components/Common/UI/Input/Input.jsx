import React from 'react';
import "./input.css";
import DatePickerPage from '../DatePicker/DatePicket';


const Input = (props) => {

    let inputElement = null;
    let inputClasses = null;
    console.log(props)
    let elementClassName = !props.valid ? "form- has-success has-feedback" : "form- has-error has-feedback"
    inputClasses = !props.valid && props.touched ? "form-control is-invalid" : "form-control "
    console.log(props.elementConfig)
    switch (props.elementType) {
        case 'input':
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case 'date':
            inputElement = <input
                type="date"
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case 'select':
            inputElement = (<select className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option =>
                    <option value={option.value}>{option.displayName}</option>
                )}

            </select>)
            break;
        case 'textArea':
            inputElement = (<textarea className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}></textarea>)
            break;

        default:
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
    }
    return (
        <div className={elementClassName}>
            <label>{props.elementConfig.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;