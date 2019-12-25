import React from 'react';
import Navbar from '../Common/UI/Navbar/navbar';
import LeaveRequestData from './LeaveRequestData';


const LeaveRequestList = () => {
    return (
        <div>
            <Navbar />
            <div className="container" id="dashbaord">
                <div className="pt-4">
                    <h1>Leave Request</h1>
                    <hr />
                </div>
                <div className="p-2">
                    <div className="row">
                        <div className="col-12 mt-2">
                            <LeaveRequestData />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveRequestList;