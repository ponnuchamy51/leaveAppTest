import React from "react"
import Input from "../Common/UI/Input/Input";

import { withRouter } from "react-router-dom";
import axios from '../../utill/axios'

import Button from "../Common/UI/Button/Button";

class LeaveRequestData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            LeaveForm: {
                department_id: {
                    elementType: "select",
                    elementConfig: {
                        label: "Department",
                        type: "text",
                        placeholder: "select department",
                        options: [
                            {
                                value: "1",
                                displayName: "MCA"
                            },
                            {
                                value: "2",
                                displayName: "MBA"
                            }
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
                leave_type: {
                    elementType: "select",
                    elementConfig: {
                        label: "Leave Type",
                        type: "text",
                        placeholder: "please select leave type",
                        options: [
                            {
                                value: "1",
                                displayName: "CL"
                            },
                            {
                                value: "2",
                                displayName: "SCL"
                            },
                            {
                                value: "3",
                                displayName: "CPL"
                            },
                            {
                                value: "4",
                                displayName: "EL"
                            },
                            {
                                value: "5",
                                displayName: "LLP"
                            }
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
                start_date: {
                    elementType: "date",
                    elementConfig: {
                        label: "Start Date",
                        type: 'date',
                        placeholder: "please select date"
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                end_date: {
                    elementType: "date",
                    elementConfig: {
                        label: "End Date",
                        type: "date",
                        placeholder: "please select date"
                    },
                    rules: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    value: '',
                    visible: true
                },
                start_date_session: {
                    elementType: "select",
                    elementConfig: {
                        label: "Start Date Session",
                        type: "text",
                        placeholder: "please select start date session",
                        options: [
                            {
                                value: "1",
                                displayName: "Full Day"
                            },
                            {
                                value: "2",
                                displayName: "Start of day"
                            },
                            {
                                value: "3",
                                displayName: "End of day"
                            }
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
                end_date_session: {
                    elementType: "select",
                    elementConfig: {
                        label: "End Date Session",
                        type: "text",
                        placeholder: "please select end date session",
                        options: [
                            {
                                value: "1",
                                displayName: "Full Day"
                            },
                            {
                                value: "2",
                                displayName: "Start of day"
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
                reason: {
                    elementType: "textArea",
                    elementConfig: {
                        label: "Reason",
                        type: "text",
                        placeholder: "please enter reason"
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
        const updatedLoginForm = { ...this.state.LeaveForm }
        let updatedFormElement = { ...updatedLoginForm[key] }
        updatedFormElement.value = event.target.value
        updatedFormElement.valid = this.validateInput(updatedFormElement.value, updatedFormElement.rules)
        updatedFormElement.touched = true
        let formValid = true;
        for (let formIdentifier in this.state.LeaveForm) {
            formValid = this.state.LeaveForm[formIdentifier].valid && formValid
        }
        updatedLoginForm[key] = updatedFormElement
        console.log('ddd', updatedLoginForm)

        this.setState({ LeaveForm: updatedLoginForm, isValid: formValid, errors: { message: null } });
        console.log(this.state)


    }
    submitHandler = async (event) => {
        event.preventDefault();
        let formData = {}
        for (let formIdentifier in this.state.LeaveForm) {
            formData[formIdentifier] = this.state.LeaveForm[formIdentifier].value
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
        for (let key in this.state.LeaveForm) {
            formElementsArray.push({
                id: key,
                config: this.state.LeaveForm[key]
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

export default withRouter(LeaveRequestData);
