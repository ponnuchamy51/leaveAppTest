import React from 'react'

const Button = (props) => {
    return (
        <button   disabled={props.disabled} type={props.type} className={props.classes}>
            {props.isLoading ? <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
            </div> : props.name }
        </button>
    )
}

export default Button;