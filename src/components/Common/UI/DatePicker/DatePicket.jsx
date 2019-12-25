import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

class DatePickerPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         date: null,
         focused: null
      }
   }
   render() {
      return (
         <div>
            <SingleDatePicker
               id="datePicker"
               showClearDate={true}
               showDefaultInputIcon={true}
               small={true}
               {...this.props}
               regular={true}
               numberOfMonths={1}
               date={this.state.date}
               onDateChange={this.props.onChange}
               focused={this.state.focused}
               onFocusChange={({ focused }) =>
                  this.setState({ focused })
               }
               hideKeyboardShortcutsPanel={true}
            />

         </div>
      );
   }
}


export default DatePickerPage;