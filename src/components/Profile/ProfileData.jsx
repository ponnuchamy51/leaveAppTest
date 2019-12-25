import React from "react"
import Input from "../Common/UI/Input/Input";

import { withRouter } from "react-router-dom";
import axios from '../../utill/axios'

import Button from "../Common/UI/Button/Button";

class ProfileData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            profileForm: {
                first_name: {
                    elementType: "input",
                    elementConfig: {
                        label: "First Name",
                        type: "text",
                        placeholder: "enter first name",
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                last_name: {
                    elementType: "input",
                    elementConfig: {
                        label: "Last Name",
                        type: "text",
                        placeholder: "enter first name",
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                gender: {
                    elementType: "radio",
                    elementConfig: {
                        label: "Gender",
                        type: "input",
                        options: [
                            {
                                value: 1,
                                displayName: "Male"
                            },
                            {
                                value: 2,
                                displayName: "Female"
                            }
                        ]
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                reference_number: {
                    elementType: "input",
                    elementConfig: {
                        label: "Employee ID",
                        type: "text",
                        placeholder: "enter reference number",
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    disabled: true
                },
                phone: {
                    elementType: "input",
                    elementConfig: {
                        label: "Phone Number",
                        type: "text",
                        placeholder: "enter phone number",
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                email: {
                    elementType: "input",
                    elementConfig: {
                        label: "Email",
                        type: "email",
                        placeholder: "enter email",
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                date_of_birth: {
                    elementType: "date",
                    elementConfig: {
                        label: "Date Of Birth",
                        type: "date",
                        placeholder: "enter DOB",
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },


            },
            errors: {
                message: ''
            },
            isValid: false
        }
        console.log(this.state)

    }

    validateInput(value, rules) {
        let isValid = true
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        return isValid;
    }

    changeInputHandler = (event, key) => {
        console.warn(event)
        const updatedLoginForm = { ...this.state.profileForm }
        let updatedFormElement = { ...updatedLoginForm[key] }
        updatedFormElement.value = event.target.value
        updatedFormElement.valid = this.validateInput(updatedFormElement.value, updatedFormElement.rules)
        updatedFormElement.touched = true
        let formValid = true;
        for (let formIdentifier in this.state.profileForm) {
            formValid = this.state.profileForm[formIdentifier].valid && formValid
        }
        updatedLoginForm[key] = updatedFormElement
        console.log('ddd', updatedLoginForm)

        this.setState({ profileForm: updatedLoginForm, isValid: formValid, errors: { message: null } });
        console.log(this.state)


    }
    submitHandler = async (event) => {
        event.preventDefault();
        let formData = {}
        for (let formIdentifier in this.state.profileForm) {
            formData[formIdentifier] = this.state.profileForm[formIdentifier].value
        }
        this.setState({ isLoading: true })
        this.setState({ isLoading: true })
        formData.old_leave_count = 1
        try {
            await axios.post('/api/leave-request', formData).then((res) => {
                if (res.status === 200) {
                    this.setState({ isLoading: true })
                    this.props.history.push("/dashboard");
                }
                else {
                    this.setState({ isLoading: true })
                    this.setState({
                        errors: {
                            message: "please check your info"
                        }
                    })
                }
            })
        }
        catch (e) {
            console.log(e)
            this.setState({
                errors: {
                    message: "please check your detial"
                }, isLoading: false
            })
        }

        return false;
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.profileForm) {
            formElementsArray.push({
                id: key,
                config: this.state.profileForm[key]
            });
        }



        return (
            <div className="container">
                {this.state.errors.message ? <div className="text-danger alert-error fade show p-3 text-center" >
                    <strong>{this.state.errors.message}</strong>
                </div> : null}

                <form onSubmit={this.submitHandler}>
                    <div className="form-row" >
                        {formElementsArray.map(formElement => (
                            <div className="form-group col-md-5 mr-5">
                                <Input
                                    key={formElement.id}
                                    elementType={formElement.config.elementType}
                                    elementConfig={formElement.config.elementConfig}
                                    value={formElement.config.value}
                                    valid={formElement.config.valid}
                                    touched={formElement.config.touched}
                                    visible={formElement.config.visible}

                                    changed={(event) => this.changeInputHandler(event, formElement.id)}
                                />
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-light ml-2">Cancel</button>
                </form >
            </div >
        )
    }
}

export default withRouter(ProfileData);
