import React from 'react';
import './App.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import Employees from "./components/employees/Employees";
import "mdbreact/dist/css/mdb.css";
import Header from "./components/header/Header";



function App() {

    return (
        <div className="App">
          <Header /><br></br>
          <Employees />
          
        </div>
      );
 
}

export default App;
