import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import useWordGame from './hooks/useWordGame'

export default function App() {


  const {
    textUseRef,
    hChange,
    text,
    isTimeReaming,
    startGame,
    time,
    wordCount
  } =useWordGame(12)

 

  return (
    <div className="App">
      <textarea
        ref={textUseRef}
        onChange={hChange}
        value={text}
        disabled={!isTimeReaming}
      />{" "}
      <br />
      <button onClick={startGame} disabled={isTimeReaming}>
        Start
      </button>
      <h3>Vrijeme: {time}</h3>
      <h2>Koliko rijeci je upisano: {wordCount} </h2>
    </div>
  );
}
