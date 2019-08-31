import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import './App.css';
import axios from "axios";
import CreateCard from "./card";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  const [planet, setPlanet] = useState();

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
      .then(response => {
        setData(response.data.results)
        const homeworld = response.data.results

        homeworld.map(n => {
          axios.get(n.homeworld)
            .then(response => setPlanet(response.data))
            .catch(err => console.log(err))
        })
      })
      .catch((err) => console.log(err))
    }, [])

    console.log(planet)
    
  const Main = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `
    
  return (
    <div className="App">
    <h1 className="Header">Star Wars</h1>
    <Main>
      {data.map(n => {return <CreateCard name={n.name} age={n.birth_year} />})}
    </Main>
    </div>
  );
}

export default App;
