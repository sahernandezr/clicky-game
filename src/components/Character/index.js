import React from 'react';
import "./style.css";


function Character(props) {
  return (
    <div className="card" onClick={() => props.clickedCharacter(props.id)} >
      <div className="img-container" >
        <img
          alt={props.name}
          src={props.image}
        />
      </div>
    </div>
  );
}

// class Character extends Component {
//   state = {
//     score: 0
//   };

//   render(props) {
//     return (
//     <div className="card">
//       <div className="img-container">
//         <img
//           alt={props.name}
//           src={props.image}
//         />
//       </div>
//     </div>
//     );
//   }
// }


export default Character;