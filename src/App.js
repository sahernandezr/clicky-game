import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Character from "./components/Character";
import characters from "./characters.json";

let score = 0;
let topScore = 0;
let message = "Click on an image to earn points, but don't click on any more than once";

class App extends Component {
  state = {
    characters,
    score,
    topScore,
    message
  };

  

  setClicked = id => {
    //array of characters
    const characters = this.state.characters;
    //filter by clicked
    const clickedCharacter = characters.filter(character => character.id === id);
    //if image has already been clicked (clicked=true), player losses
    if (clickedCharacter[0].clicked) {
      alert("You had already clicked that one! You just lost!")
      score = 0;
      message = "Click on an image to earn points, but don't click on any more than once";

      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }

      this.setState({ message });
      this.setState({ score });
      this.setState({ characters });
    } else if (score <11) {
      clickedCharacter[0].clicked = true;
      console.log(clickedCharacter[0].clicked);
      score++;
      message = "Great choice! You hadn't picked that one out yet";

      if (score>topScore) {
        topScore=score;
        this.setState({ topScore});
      }

      //change the order of the cards
      characters.sort(function(a,b){return 0.5 - Math.random()});

      this.setState({ characters });
      this.setState({ score });
      this.setState({ message });
    } else {
      //if the player is making the final 12th selection
      alert("You won! Play again")
      clickedCharacter[0].clicked=true;
      score=0;
      message= "Click on an image to earn points, but don't click on any more than once";
      topScore=12;
      this.setState({ topScore });
      //restarted all clicked properties to false
      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }
      //mix the order of the cards
      characters.sort(function(a,b){return 0.5 - Math.random()});

      this.setState({ characters });
      this.setState({ score });
      this.setState({ message });
    }
  
  };

  render() {
    return (
      <div className="wholeSite">
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Header message={this.state.message}>Clicky Game!</Header>


        <Wrapper>
          {
            this.state.characters.map((character, i) =>
              <Character 
              setClicked={this.setClicked}
              id={character.id} 
              key={character.id}
              name={character.name} 
              image={character.image} />
            )
          }
        </Wrapper>
      </div>
    );
  };
}

export default App;
