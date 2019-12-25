import React from 'react';
import axios from '../../utill/axios'

import "./dashboard.css";
import Navbar from '../Common/UI/Navbar/navbar';
import TableViewLeaveDetail from '../LeaveHistory/TableViewLeaveDetail';

class Dashboard extends React.Component {
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
                  <h1>Dashboard</h1>
                  <hr />
               </div>
               <div className="p-2">
                  <div className="row">
                     <div className="col-3">
                        <div className="card" >
                           <div className="card-body">
                              <h5 className="card-title">Special title treatment</h5>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                              <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                        </div>
                     </div>
                     <div className="col-3">
                        <div className="card" >
                           <div className="card-body">
                              <h5 className="card-title">Special title treatment</h5>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                              <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                        </div>
                     </div>
                     <div className="col-3">
                        <div className="card" >
                           <div className="card-body">
                              <h5 className="card-title">Special title treatment</h5>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                              <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                        </div>
                     </div>
                     <div className="col-3">
                        <div className="card" >
                           <div className="card-body">
                              <h5 className="card-title">Special title treatment</h5>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                              <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12 mt-5">
                        <TableViewLeaveDetail {...this.state} editable={true} cancelable />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Dashboard;