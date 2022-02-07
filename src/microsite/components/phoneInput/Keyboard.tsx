import React from "react";
import './_keyboard.scss'


export const Keyboard = ({handleNumClick} : {handleNumClick: (e: any) => void}) => (

    <div className="number-keys" onClick={ (event) => handleNumClick(event.target) }>
      <div className="row">
        <button className="col" id="num-1" value={1}>1</button>
        <button className="col" id="num-2" value={2}>2</button>
        <button className="col" id="num-3" value={3}>3</button>
      </div>
      <div className="row">
        <button className="col" id="num-4" value={4}>4</button>
        <button className="col" id="num-5" value={5}>5</button>
        <button className="col" id="num-6" value={6}>6</button>
      </div>
      <div className="row">
        <button className="col" id="num-7" value={7}>7</button>
        <button className="col" id="num-8" value={8}>8</button>
        <button className="col" id="num-9" value={9}>9</button>
      </div>
      <div className="row">
        <button className="col__backspace" id="backspace" value={'<<<'}>СТЕРЕТЬ</button>
        <button className="col" id="num-0" value={0}>0</button>
      </div>
    </div>
)
