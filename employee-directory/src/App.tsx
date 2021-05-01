import React from 'react';
import './App.css';
import userTable from "./components/userTable";

function App() {

  return (
      <div className="heading">
        <h1>Employee Directory</h1> 
        <div className="content">
          <userTable />
        </div>
      </div>
      
      
     
    
  );
}

export default App;
