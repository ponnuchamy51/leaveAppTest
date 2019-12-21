import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/dashboard" exact component={Dashboard}/>
      </div>
    </Router>
  );
}


export default App;
