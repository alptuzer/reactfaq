import React, { Component, useState } from 'react';
import './App.css';
import Accordion from './components/Accordion.js';
 
function  App()  {
  

    const [active,setActive]  = useState("");
    return (
      <div className="App">
        <h1> FAQ App</h1>
      <Accordion title="Question 1" active={active} setActive={setActive}></Accordion>
      <Accordion title="Question 2"  active={active} setActive={setActive}></Accordion>
      <Accordion title="Question 3"  active={active} setActive={setActive} ></Accordion>
      <Accordion title="Question 4"  active={active} setActive={setActive}  ></Accordion>
 
      </div>
    );
  
}

export default App;
