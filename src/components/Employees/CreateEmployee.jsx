import React from 'react';
import Navbar from '../Common/UI/Navbar/navbar';
import { Link } from 'react-router-dom'
import EmployeeList from './EmployeeList';
import EmployeeCreateData from './EmployeeCreateData';

const CreateEmployeePage = () => {
    return (
        <div>
            <Navbar />
            <div className="container" id="dashbaord">
                <div className="pt-4">
                    <h1>Create Employee</h1>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-12 m-0">
                        <EmployeeCreateData />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateEmployeePage;