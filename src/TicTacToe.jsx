import "./TicTac.css"
import { useState } from "react";
import React from 'react'
import Confetti from 'react-confetti'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export function TicTacToe() {
  const [values,setValues] = useState(["","","","","","","","",""])
  const { width, height } = useState(window.innerWidth,window.innerHeight)

  const [XTurn,setXTurn] = useState(true)

  const HandClick = (index)=>{
    if(!final && values[index] === ""){
      console.log(index)
    const copy = [...values];
    copy[index] = XTurn ? "X" : "O"
    setValues(copy)
    setXTurn(!XTurn)
    }
  }

const winner = (values)=>{

  const index = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for (let i = 0; i < index.length; i++) {
    const [a,b,c] = index[i];
  if(values[a] != "" && values[a] === values[b] && values[b] === values[c]){
    console.log("winner is " + values[a] )
    return values[a]
  }
}
  return null
}

 const final = winner(values)
 function refreshPage() {
  window.location.reload(false);
}
  return (
    <div className="Tic-container">
        { final ? <Confetti
      width={width}
      height={height}
    /> : "" }
      <h1>Tic Tac Toe</h1>
      <div className="boxes">
      {values.map((one,index)=>( <Box ValueX={one} onBoxClick={()=> HandClick(index)
      }/> ))}
      </div>
      { final ? <p>The Winner is : {final}</p> : "" } 
      { final ? <Button className="extra" variant="contained" onClick={
        ()=>{refreshPage()}
      }>Try Again</Button> : "" }
    </div>
  );
}

function Box({ValueX,onBoxClick}){
  const style = {
    color: ValueX === "X" ? "red" : "green",
  }
  return( 
  <div className="Box" style={style} onClick={onBoxClick} >
      {ValueX}
  </div>
  )
}


