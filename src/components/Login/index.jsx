import React from 'react';
import classes from  "./Login.css"

const LoginPage = () => {
    return (
        <div className={classes.container}> 

<form method="post" action="index.html">
<div className={classes.box}>
<h1>Dashboard</h1>

<input type="email" name="email" value="emailcontainer" onFocus="field_focus(this, 'email');" className={classes.email} />
  
<input type="password" name="email" value="email" onFocus="field_focus(this, 'email');" className={classes.email} />
  
<a href="#"><div className={classes.btn}>Sign In</div></a> 
container
<a href="#"><div className={classes.btn}>Sign In</div></a> 
container
<a href="#"><div id="btn2">Sign Up</div></a> 
  
</div>
  
</form>

  
        </div>
    )
}

export default LoginPage;