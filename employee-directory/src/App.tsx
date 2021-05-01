import React from 'react';
import './App.css';
import UserTable from "./components/userTable";

function App() {

  return (
      <div className="heading">
        <h1>Employee Directory</h1> 
        <div className="content">
          <UserTable />
        </div>
      </div>  
      
     
    
  );
}

export default App;
