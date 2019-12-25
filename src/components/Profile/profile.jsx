import React from 'react';
import Navbar from '../Common/UI/Navbar/navbar';
import "./profile.css"
import ProfileData from './ProfileData';

const ProfilePage = () => {
   return (
      <div >
         <Navbar />
         <div className="container p-4" id="profile">
            <div className="row">
               <div className="col-md-4 col-xs-12">
                  <div className="white-box">
                     <div className="card" >
                        <img className="card-img-top"
                           // @ts-ignore
                           src={require('./../../users/genu.jpg')} alt="Card image cap" />
                        <div className="card-body">
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                     </div>

                     <div className="user-btm-box">
                        <div className="col-md-4 col-sm-4 text-center">
                           <p className="text-purple"><i className="ti-facebook"></i></p>
                           <h1>258</h1>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center">
                           <p className="text-blue"><i className="ti-twitter"></i></p>
                           <h1>125</h1>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-8 col-xs-12">
                  <div className="white-box">
                     <form className="form-horizontal form-material">
                        <ProfileData />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )


}

export default ProfilePage;