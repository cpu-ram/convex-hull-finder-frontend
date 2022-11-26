import logo from './logo.svg';
import './App.css';
import {state,useEffect,useState} from 'react';

function App() {

const [clickCoordinates, setClickCoordinates]=useState({x:-1,y:-1});
const [boardCoordinates, setBoardCoordinates]=useState({x:-1,y:-1});


function handleClick(e){
  setClickCoordinates({x: e.screenX, y: e.screenY});
}

useEffect(()=>{ 
  const board = document.querySelector("#board");
  const boardPosition = board.getBoundingClientRect();
  console.log(JSON.stringify(boardPosition));
  setBoardCoordinates({x:boardPosition.left, y:boardPosition.top});

  board.addEventListener('click',handleClick);
  return ()=> document.removeEventListener('click',handleClick);
},[]);


  return (
    <>
    <svg id="board"  xmlns="http://www.w3.org/2000/svg" width="500px" height="500px">
      <g fill="white" stroke="black" strokeWidth="5">
        <rect width="100%" height="100%"/>
      </g>
    </svg>
    <p>
      Click: x= {clickCoordinates.x}, y= {clickCoordinates.y};
      <br />
      Board: x= {boardCoordinates.x}, y= {boardCoordinates.y};
      <br />
      
    </p>
    </>
  );
}

export default App;
