import React from 'react';
import axios from '../../utill/axios'

import Navbar from '../Common/UI/Navbar/navbar';
import TableViewLeaveDetail from '../LeaveHistory/TableViewLeaveDetail';
import TableViewEmployeeDetail from './TableViewEmployeeDetail';

class EmployeeList extends React.Component {
    state = {
        employees: []
    };
    componentWillMount() {
        axios.get('api/employees').then((result) => {
            this.setState({
                employees: result["data"]["data"]
            })
        })
    }
    render() {
        return (
            <div>
                <div className="" >
                    <TableViewEmployeeDetail {...this.state} />
                </div>
            </div>
        )
    }
}

export default EmployeeList;