import React from 'react';


const TableViewLeaveDetail = (props) => {
    console.log(props)
    return (
        <div className="row">
            <div className="col-12">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.leaves.map(leave => {
                            return (
                                <tr key={leave.id}>
                                    <td scope="row">{leave.id}</td>
                                    <td scope="row">{leave.start_date}</td>
                                    <td scope="row">{leave.end_date}</td>
                                    <td scope="row">{leave.reason}</td>
                                    <td scope="row">{leave.status ? leave.status : "Requested"}</td>
                                    <td scope="row">
                                        {props.editable ? <button className="btn btn-sm btn-info">Edit</button> : null}
                                        {props.cancelable ? <button className="btn btn-sm btn-danger ml-1">Cancel</button> : null}
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

export default TableViewLeaveDetail;