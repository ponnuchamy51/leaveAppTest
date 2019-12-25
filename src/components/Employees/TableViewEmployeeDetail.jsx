import React from 'react';


const TableViewEmployeeDetail = (props) => {
    console.log(props)
    return (
        <div className="row">
            <div className="col-12">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">EMP ID</th>
                            <th scope="col">Department</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.employees.map(leave => {
                            return (
                                <tr key={leave.id}>
                                    <td scope="row">{leave.id}</td>
                                    <td scope="row">{leave.first_name}</td>
                                    <td scope="row">{leave.last_name}</td>
                                    <td scope="row">{leave.reference_number}</td>
                                    <td scope="row">{leave.department}</td>
                                    <td scope="row">{leave.gender}</td>
                                    <td scope="row">{leave.phone}</td>
                                    <td scope="row">{leave.email}</td>
                                    <td scope="row">
                                        <button className="btn btn-sm btn-info">Edit</button>
                                        <button className="btn btn-sm btn-danger ml-1">Disable</button>
                                        <button className="btn btn-sm btn-dark ml-1">View</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableViewEmployeeDetail;