import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Character from "./components/Character";
import characters from "./characters.json";

function App() {
  return (
    <div className="wholeSite">
    <Nav/>
    <Header>Clicky Game!</Header>
    <Wrapper>
    {
  characters.map((character, i) => 
  <Character name={character.name} image={character.image}/>
  )}
    </Wrapper>
    </div>
  );
}

export default App;
