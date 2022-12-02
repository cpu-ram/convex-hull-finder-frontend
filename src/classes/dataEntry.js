import { cleanup } from '@testing-library/react';
import {useEffect,useState} from 'react';

function DataEntry() {
  

  const [pointsEntered, setPointsEntered]=useState([]);

  function PointsDisplayed(props){
    return(
        <>
        {pointsEntered.map((point=><circle cx={point.x} cy={point.y} r='5' /> ))}
        </>
    )
  }

  useEffect(()=>{ 
    function handleClick(e){
  
    let enteredViewPortCoordinates={x:e.clientX, y:e.clientY};
    
    const boardPosition = board.getBoundingClientRect();
    
    let boardRelativeClickCoordinates={
      x:enteredViewPortCoordinates.x-boardPosition.left,
      y:enteredViewPortCoordinates.y-boardPosition.top
    }
    pointsEntered.push(boardRelativeClickCoordinates);
    console.log(JSON.stringify(pointsEntered));
    }

    const board = document.querySelector("#board");
    board.addEventListener('click',handleClick);

    return function cleanup(){
      board.removeEventListener('click', handleClick);
    }

  },[]);

  function FindConvexHull(){

  }

  return (
    <>
    <div style={{display:"block",boxSizing:"border-box",width:"530px",height:"530px",
      margin:"0", paddingTop:"15px", paddingRight:"15px",
        paddingLeft:"15px", paddingBottom:"15px", outline:"1px solid red"}}>

    <svg id="board"  xmlns="http://www.w3.org/2000/svg" width="500px" height="500px" 
      style={{display: "block", margin:"0",
        boxSizing: "content-box", padding:"0", outline:"1px solid blue"}}>
      
      <PointsDisplayed pointsEntered={pointsEntered}></PointsDisplayed>

    </svg>
    </div>


    </>
  );
}

export default DataEntry;
