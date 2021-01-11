import './App.css';
import Data from './MOCK_DATA.json';
import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input type="text" placeholder="Search Name"
      onChange={ (event) => {setSearchTerm(event.target.value)} } />
      {Data.filter((val) => {
          if(searchTerm === ""){
            return val
          }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map((val, key) => {
        return <div className="name" key={key}> 
          <p> {val.first_name} </p>
        </div>;
      })}
    </div>
  );
}

export default App;