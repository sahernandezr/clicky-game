import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Character from "./components/Character";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters,
    score: 0,
    topScore: 12,
    message: "Click on an image to earn points, but don't click on any more than once"
  };

 

  render () {
    return (
      <div className="wholeSite">
        <Nav score={this.state.score} topScore={this.state.topScore}/>
        <Header message={this.state.message}>Clicky Game!</Header>
        
        
        <Wrapper>
          {
            this.state.characters.map((character, i) => 
            <Character name={character.name} image={character.image}/>
            )
          }
        </Wrapper>
      </div>
    );
  };
}

export default App;
