import React from 'react';
import './App.css';
import SearchBox from "./components/searchBox";
import userTable from "./components/userTable";

function App() {

  return (
      <div className="heading">
        <h1>Employee Directory</h1> 
        <div className="content">
          <SearchBox />
          <userTable />
        </div>
      </div>
      
      
     
    
  );
}

export default App;
