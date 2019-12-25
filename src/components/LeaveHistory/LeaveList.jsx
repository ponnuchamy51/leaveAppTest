import React from 'react';
import Navbar from '../Common/UI/Navbar/navbar';
import axios from '../../utill/axios'
import TableViewLeaveDetail from './TableViewLeaveDetail';

class LeavesList extends React.Component {
    state = {
        leaves: []
    };
    componentWillMount() {
        axios.get('api/leave-list').then((result) => {
            this.setState({
                leaves: result["data"]["data"]["leave_list"]
            })
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container" id="dashbaord">
                    <div className="pt-4">
                        <h1>Leave Detail</h1>
                        <hr />
                    </div>
                    <div className="p-2">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <TableViewLeaveDetail {...this.state} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeavesList;