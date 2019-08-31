import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CreateCard from "./card";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
      .then(response => {
        setData(response.data.results) 
      })
      .catch((err) => console.log(err))
    }, [])
    
    
  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      {data.forEach(n => {
        console.log(n.name)
      })}
    </div>
  );
}

export default App;
