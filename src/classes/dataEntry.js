import {useEffect,useState} from 'react';

function DataEntry() {

  const [lastClickAbsCoords, setLastClickAbsCoords]=useState({x:-1,y:-1});
  const [lastClickRelCoords, setLastClickRelCoords]=useState({x:-1, y:-1});
  const [boardPosition, setBoardPosition]=useState({x:-1, y:-1});
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
  
    let enteredAbsClickCoordinates={x:e.pageX, y:e.pageY};
  
    let boardRelativeClickCoordinates={
      x:enteredAbsClickCoordinates.x-boardPosition.left,
      y:enteredAbsClickCoordinates.y-boardPosition.top
    }
    
    pointsEntered.push(boardRelativeClickCoordinates);
    setLastClickRelCoords(boardRelativeClickCoordinates);
    setLastClickAbsCoords(enteredAbsClickCoordinates);
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
      
      <PointsDisplayed></PointsDisplayed>

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

export default DataEntry;
