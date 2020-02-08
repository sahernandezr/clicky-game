import React from 'react';
import "./style.css";


function Character(props) {
  // function sayHello () {
  //   alert("hello");
  // }

    return (
    <div onClick={() => props.setClicked(props.id) 
    //console.log(props.id)
    } className="card">
      <div className="img-container" >
        <img
          alt={props.name}
          src={props.image}
        />
      </div>
    </div>
  );
}

export default Character;