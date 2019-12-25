import React from "react"
import Input from "../Common/UI/Input/Input";
import { isValid } from "ipaddr.js";

import { withRouter } from "react-router-dom";
import axios from '../../utill/axios'

import Button from "../Common/UI/Button/Button";

class LoginData extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
         loginForm: {
            email: {
               elementType: "input",
               elementConfig: {
                  label: "Email",
                  type: 'text',
                  placeholder: "enter email"
               },
               rules: {
                  required: true
               },
               valid: false,
               touched: false,
               value: ''
            },
            password: {
               elementType: "input",
               elementConfig: {
                  label: "Password",
                  type: "password",
                  placeholder: "enter password"
               },
               rules: {
                  required: true
               },
               valid: false,
               touched: false,
               value: ''
            },
         },
         errors: {
            message: ''
         },
         isValid: false
      }

   }

   validateInput(value, rules) {
      let isValid = true
      if (rules.required) {
         isValid = value.trim() !== '' && isValid
      }
      return isValid;
   }

   changeInputHandler = (event, key) => {
      const updatedLoginForm = { ...this.state.loginForm }
      let updatedFormElement = { ...updatedLoginForm[key] }
      updatedFormElement.value = event.target.value
      updatedFormElement.valid = this.validateInput(updatedFormElement.value, updatedFormElement.rules)
      updatedFormElement.touched = true
      let formValid = true;
      for (let formIdentifier in this.state.loginForm) {
         formValid = this.state.loginForm[formIdentifier].valid && formValid
      }
      updatedLoginForm[key] = updatedFormElement
      this.setState({ loginForm: updatedLoginForm, isValid: formValid, errors: { message: null } });
      console.log(this.state)


   }
   submitHandler = async (event) => {
      event.preventDefault();
      let formData = {}
      for (let formIdentifier in this.state.loginForm) {
         formData[formIdentifier] = this.state.loginForm[formIdentifier].value
      }
      this.setState({ isLoading: true })
      this.setState({ isLoading: true })
      try {
         await axios.post('/api/login', formData).then((res) => {
            if (res.status === 200) {
               this.setState({ isLoading: true })
               console.log(res)
               localStorage.setItem("token", res['data']['data']['token']);
               this.props.history.push("/dashboard");
            }

            else {
               this.setState({ isLoading: true })
               this.setState({
                  errors: {
                     message: "please check your credentials"
                  }
               })
            }
         })
      }
      catch (e) {
         this.setState({
            errors: {
               message: "please check your credentials"
            }, isLoading: false
         })
      }

      return false;
   }
   render() {
      const formElementsArray = [];
      for (let key in this.state.loginForm) {
         formElementsArray.push({
            id: key,
            config: this.state.loginForm[key]
         });
      }



      return (
         <div className="box">
            <h1 className="text-center pt-4">LoginForm</h1>
            {this.state.errors.message ? <div className="text-danger alert-error fade show p-3 text-center" >
               <strong>{this.state.errors.message}</strong>
            </div> : null}

            <form className="form" onSubmit={this.submitHandler} >
               {formElementsArray.map(formElement => (
                  <Input
                     key={formElement.id}
                     elementType={formElement.config.elementType}
                     elementConfig={formElement.config.elementConfig}
                     value={formElement.config.value}
                     valid={formElement.config.valid}
                     changed={(event) => this.changeInputHandler(event, formElement.id)}
                  />
               ))}
               <div className="mt-4">
                  <Button classes={'btn btn-secondary mr-4'} type="button" name="Reset" />
                  <Button classes={'btn btn-success'} type="submit" name="Submit" disabled={!this.state.isValid} isLoading={this.state.isLoading} />
               </div>
            </form>
         </div>
      )
   }
}

export default withRouter(LoginData);
