import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import './classes/point.js';

function App() {

  const [lastClickAbsCoords, setLastClickAbsCoords]=useState({x:-1,y:-1});
  const [lastClickRelCoords, setLastClickRelCoords]=useState({x:-1, y:-1});
  const [boardPosition, setBoardPosition]=useState({x:-1, y:-1});
  const [pointsEntered, setPointsEntered]=useState([]);

  useEffect(()=>{ 
    function handleClick(e){
  
    let enteredClickCoordinates={x:e.pageX, y:e.pageY};
  
    let boardRelativeClickCoordinates={
      x:enteredClickCoordinates.x-boardPosition.left,
      y:enteredClickCoordinates.y-boardPosition.top
    }
    
    pointsEntered.push(boardRelativeClickCoordinates);
    setLastClickRelCoords(boardRelativeClickCoordinates);
    setLastClickAbsCoords(enteredClickCoordinates);
    }
  

    const board = document.querySelector("#board");
    const boardPosition = board.getBoundingClientRect();
    setBoardPosition(boardPosition)
    board.addEventListener('click',handleClick);

  },[]);

  return (
    <>
    <div style={{display:"block",boxSizing:"border-box",width:"530px",height:"530px",
      margin:"0", paddingTop:"15px", paddingRight:"15px",
        paddingLeft:"15px", paddingBottom:"15px", outline:"1px solid red"}}>

    <svg id="board"  xmlns="http://www.w3.org/2000/svg" width="500px" height="500px" 
      style={{display: "block", margin:"0",
        boxSizing: "content-box", padding:"0", outline:"1px solid blue"}}>
      
    </svg>
    </div>

    <p>
      Last click's relative coords: x= {lastClickRelCoords.x}, y= {lastClickRelCoords.y};
      <br /><br />
      {JSON.stringify(pointsEntered)};
      <br />
    </p>

    </>
  );
}

export default App;
