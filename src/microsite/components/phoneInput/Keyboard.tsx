import React from "react";


export const Keyboard = ({handleNumClick} : {handleNumClick: (e: any) => void}) => {


  return (
    <div className="number-keys" 
    onClick={(event) => handleNumClick(event.target)}
    >
    <div className="row">
      <button className="col" value={1}>1</button>
      <button className="col" value={2}>2</button>
      <button className="col" value={3}>3</button>
    </div>
    <div className="row">
      <button className="col" value={4}>4</button>
      <button className="col" value={5}>5</button>
      <button className="col" value={6}>6</button>
    </div>
    <div className="row">
      <button className="col" value={7}>7</button>
      <button className="col" value={8}>8</button>
      <button className="col" value={9}>9</button>
    </div>
    <div className="row">
      <button className="col__backspace" value={999}>СТЕРЕТЬ</button>
      <button className="col" value={0}>0</button>
    </div>

    </div>


  )
}