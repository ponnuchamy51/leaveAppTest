import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './components/Login';
import Dashboard from './components/Dashboard/index';
import NotFoundPage from './components/Common/NotFoundPage';
import ProfilePage from './components/Profile/profile';
import EmployeesPage from './components/Employees/Employees';
import LeaveRequest from './components/LeaveRequest/LeaveRequest';
import LeaveHistories from './components/LeaveRequest/LeaveRequest';
import InputDatePicker from './components/Common/UI/DatePicker/DatePicket'
import LeavesList from './components/LeaveHistory/LeaveList';
import CreateEmployeePage from './components/Employees/CreateEmployee';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/" exact component={LoginPage}/>
          <Route path="/profile" exact component={ProfilePage}/>          
          <Route path="/employees" exact component={EmployeesPage}/>    
          <Route path="/leave-history" component={LeavesList}/>
          <Route path="/apply-leave" exact component={LeaveRequest}/>    
          <Route path="/create/employee" exact component={CreateEmployeePage}/>    
          <Route component={NotFoundPage}/>    
          </Switch>  
      </div>
    </Router>
  );
}


export default App;
