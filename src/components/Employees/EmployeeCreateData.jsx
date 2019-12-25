import React from "react"
import Input from "../Common/UI/Input/Input";

import { withRouter } from "react-router-dom";
import axios from '../../utill/axios'

import Button from "../Common/UI/Button/Button";

class EmployeeCreateData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            LeaveForm: {
                first_name: {
                    elementType: "input",
                    elementConfig: {
                        label: "First Name",
                        type: "text",
                        placeholder: "please enter first name"
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
                        placeholder: "please enter last name"
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
                        placeholder: "please enter employee ID"
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
                        label: "Employee DOB",
                        type: "text",
                        placeholder: "please enter DOB"
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
                    elementType: "input",
                    elementConfig: {
                        label: "Gender",
                        type: "text",
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                employee_type: {
                    elementType: "select",
                    elementConfig: {
                        label: "Type",
                        type: "text",
                        options: [
                            {
                                value: "1",
                                displayName: "Teaching"
                            },
                            {
                                value: "2",
                                displayName: "Non Teaching"
                            },
                        ]
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '1',
                    visible: true
                },
                department_id: {
                    elementType: "select",
                    elementConfig: {
                        label: "Department",
                        type: "text",
                        options: [
                            {
                                value: "1",
                                displayName: "MCA"
                            },
                            {
                                value: "2",
                                displayName: ""
                            },
                        ]
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '1',
                    visible: true
                },

            },
            userForm: {
                email: {
                    elementType: "input",
                    elementConfig: {
                        label: "Email",
                        type: "text",
                        placeholder: "please enter email"
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                user_name: {
                    elementType: "input",
                    elementConfig: {
                        label: "username",
                        type: "text",
                        placeholder: "please enter username"
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                password: {
                    elementType: "input",
                    elementConfig: {
                        label: "Password",
                        type: "text",
                        placeholder: "please enter password"
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                confirm_password: {
                    elementType: "input",
                    elementConfig: {
                        label: "Confirm Password",
                        type: "text",
                        placeholder: "please enter confirm password"
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
            leavesForm: {
                cl: {
                    elementType: "input",
                    elementConfig: {
                        label: "CL",
                        type: "number",
                        placeholder: "please enter CL"
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                scl: {
                    elementType: "input",
                    elementConfig: {
                        label: "SCL",
                        type: "number",
                        placeholder: "please enter SCL"
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                cpl: {
                    elementType: "input",
                    elementConfig: {
                        label: "CPL",
                        type: "number",
                        placeholder: "please enter CPL"
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                el: {
                    elementType: "input",
                    elementConfig: {
                        label: "EL",
                        type: "number",
                        placeholder: "please enter EL"
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                llp: {
                    elementType: "input",
                    elementConfig: {
                        label: "LLP",
                        type: "number",
                        placeholder: "please enter LLP"
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

    changeInputHandler = (event, key, formType = "LeaveForm") => {
        const updatedLoginForm = { ...this.state[formType] }
        let updatedFormElement = { ...updatedLoginForm[key] }
        updatedFormElement.value = event.target.value
        updatedFormElement.valid = this.validateInput(updatedFormElement.value, updatedFormElement.rules)
        updatedFormElement.touched = true
        let formValid = true;
        for (let formIdentifier in this.state[formType]) {
            formValid = this.state[formType][formIdentifier].valid && formValid
        }
        updatedLoginForm[key] = updatedFormElement
        this.setState({ [formType]: updatedLoginForm, isValid: formValid, errors: { message: null } });
    }
    submitHandler = async (event) => {
        event.preventDefault();
        let formData = {};
        let userData = {};
        let leavesData = {};
        for (let formIdentifier in this.state.LeaveForm) {
            formData[formIdentifier] = this.state.LeaveForm[formIdentifier].value
        }
        for (let formIdentifier in this.state.userForm) {
            userData[[formIdentifier]] = this.state.userForm[formIdentifier].value

        }
        for (let formIdentifier in this.state.leavesForm) {
            leavesData[formIdentifier] = this.state.leavesForm[formIdentifier].value
        }
        this.setState({ isLoading: true })
        this.setState({ isLoading: true })
        formData.old_leave_count = 1
        formData.user = userData
        formData.leaves = leavesData
        formData.user.role = "staff"
        try {
            await axios.post('/api/employee', formData).then((res) => {
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
        const userFormElementsArray = [];
        const leavesFormElementsArray = [];
        for (let key in this.state.LeaveForm) {
            formElementsArray.push({
                id: key,
                config: this.state.LeaveForm[key]
            });
        }
        for (let key in this.state.userForm) {
            userFormElementsArray.push({
                id: key,
                config: this.state.userForm[key]
            });
        }
        for (let key in this.state.leavesForm) {
            leavesFormElementsArray.push({
                id: key,
                config: this.state.leavesForm[key]
            });
        }



        return (
            <div className="container">
                {this.state.errors.message ? <div className="text-danger alert-error fade show p-3 text-center" >
                    <strong>{this.state.errors.message}</strong>
                </div> : null}

                <form onSubmit={this.submitHandler}>
                    <div className="row">
                        <div className="col-12 mt-3">
                            <h4><b>Employe Info</b></h4>
                        </div>
                    </div>
                    <hr />
                    <div className="form-row ml-5" >
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
                    <div className="row">
                        <div className="col-12 mt-3">
                            <h4><b>Login Info</b></h4>
                        </div>
                    </div>
                    <hr />

                    <div className="form-row ml-5" >
                        {userFormElementsArray.map(formElement => (
                            <div className="form-group col-md-5 mr-5">
                                <Input
                                    key={formElement.id}
                                    elementType={formElement.config.elementType}
                                    elementConfig={formElement.config.elementConfig}
                                    value={formElement.config.value}
                                    valid={formElement.config.valid}
                                    touched={formElement.config.touched}
                                    visible={formElement.config.visible}
                                    changed={(event) => this.changeInputHandler(event, formElement.id, "userForm")}
                                />
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 mt-3">
                            <h4><b>Leaves Info</b></h4>
                        </div>
                    </div>
                    <hr />

                    <div className="form-row ml-5" >
                        {leavesFormElementsArray.map(formElement => (
                            <div className="form-group col-md-5 mr-5">
                                <Input
                                    key={formElement.id}
                                    elementType={formElement.config.elementType}
                                    elementConfig={formElement.config.elementConfig}
                                    value={formElement.config.value}
                                    valid={formElement.config.valid}
                                    touched={formElement.config.touched}
                                    visible={formElement.config.visible}
                                    changed={(event) => this.changeInputHandler(event, formElement.id, "leavesForm")}
                                />
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="row">
                        <div className="form-group col-11">
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                            <button type="reset" className="btn btn-light ml-2 float-right">Cancel</button>
                        </div>
                    </div>
                </form >
            </div >
        )
    }
}

export default withRouter(EmployeeCreateData);
