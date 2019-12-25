import React from 'react';
import Navbar from '../Common/UI/Navbar/navbar';
import { Link } from 'react-router-dom'
import EmployeeList from './EmployeeList';

const EmployeesPage = () => {
   return (
      <div>
         <Navbar />
         <div className="container" id="dashbaord">
            <div className="pt-4">
               <h1>Employees</h1>
               <hr />
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="float-right mr-5 mb-3">
                     <Link className="btn btn-primary" to="/create/employee">Add New</Link>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12 m-0">

                  <EmployeeList />
               </div>
            </div>
         </div>
      </div >
   )
}

export default EmployeesPage;