import React from 'react';
import Home from './components/Home/Home';
import Signin from './components/Home/Signin';
import Signup from './components/Home/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import EmployeeList from './components/Kuliah/EmployeeList'
import AddForm from './components/Kuliah/AddForm';
import EditForm from './components/Kuliah/EditForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeContextProvider from './components/Kuliah/EmployeeContext';

function App() {
  return (<Router>
    <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/Signin" component={Signin} />
            <Route path="/Signup" component={Signup} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/EmployeeList' component={EmployeeList} />
            <Route path="/Add" component={AddForm} />
            <Route path="/Edit" component={EditForm} />
          </Switch>
          {// ini dari tutorial <div className="container-xl">
    //<div className="table-responsive">
     // <div className="table-wrapper">
    // <EmployeeContextProvider>
     //   <EmployeeList/>
        //</EmployeeContextProvider>
       // </div>
       // </div>
        //</div>
    </div>
    </Router>
    
  
  );
}

export default App;
