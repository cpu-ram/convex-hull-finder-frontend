import { cleanup } from '@testing-library/react';
import {useEffect,useState} from 'react';

function DataEntry() {
  const [pointsEntered, setPointsEntered] = useState([]);

  function PointsDisplayed(props){
    return(
        <>
        {pointsEntered.map((point=><circle cx={point.x} cy={point.y} r='5' /> ))}
        </>
    )
  }

  function handleClick(e) {
    console.log("e", e);
  
    let enteredViewPortCoordinates={ x: e.clientX, y: e.clientY };
    let boardPosition=document.querySelector('#board').getBoundingClientRect();
    let boardRelativeClickCoordinates={
      x: enteredViewPortCoordinates.x-boardPosition.left,
      y:enteredViewPortCoordinates.y-boardPosition.top
    }
    setPointsEntered([...pointsEntered, boardRelativeClickCoordinates]);
    
    // const boardPosition = board.getBoundingClientRect();
    
    // let boardRelativeClickCoordinates={
    //   x:enteredViewPortCoordinates.x-boardPosition.left,
    //   y:enteredViewPortCoordinates.y-boardPosition.top
    // }
    // setPointsEntered([...pointsEntered, boardRelativeClickCoordinates])
    // console.log("pointsEntered", pointsEntered)
    // pointsEntered.push(boardRelativeClickCoordinates);
    // setPointsEntered(pointsEntered);
    // console.log(JSON.stringify(pointsEntered));
  }

  // useEffect(() => {
  //   const board = document.querySelector("#board");

  //   function handleClick(e) {
  
  //     let enteredViewPortCoordinates={x:e.clientX, y:e.clientY};
      
  //     const boardPosition = board.getBoundingClientRect();
      
  //     let boardRelativeClickCoordinates={
  //       x:enteredViewPortCoordinates.x-boardPosition.left,
  //       y:enteredViewPortCoordinates.y-boardPosition.top
  //     }
  //     setPointsEntered([...pointsEntered, boardRelativeClickCoordinates])
  //     console.log("pointsEntered", pointsEntered)
  //     // pointsEntered.push(boardRelativeClickCoordinates);
  //     // setPointsEntered(pointsEntered);
  //     // console.log(JSON.stringify(pointsEntered));
  //   }

  //   board.addEventListener('click', handleClick);

  //   return function cleanup(){
  //     board.removeEventListener('click', handleClick);
  //   }
  // }, []);

  function FindConvexHull(){

  }

  // console.log("pointsEntered", pointsEntered)

  return (
    <>
    <div style={{display:"block",boxSizing:"border-box",width:"530px",height:"530px",
      margin:"0", paddingTop:"15px", paddingRight:"15px",
        paddingLeft:"15px", paddingBottom:"15px", outline:"1px solid red"}}>
        {pointsEntered.map((point=><circle cx={point.x} cy={point.y} r='5' /> ))}

    <svg id="board" onClick={handleClick}  xmlns="http://www.w3.org/2000/svg" width="500px" height="500px" 
      style={{display: "block", margin:"0",
        boxSizing: "content-box", padding:"0", outline:"1px solid blue"}}>
      
      {/* <PointsDisplayed pointsEntered={pointsEntered}> */}
      
      {pointsEntered.map((point=><circle cx={point.x} cy={point.y} r='5' /> ))}
      <circle cx='20' cy='20' r='5' />

      {/* </PointsDisplayed> */}

    </svg>
    </div>


    </>
  );
}

export default DataEntry;
