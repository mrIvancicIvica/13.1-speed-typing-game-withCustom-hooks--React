import { useState, useRef, useEffect } from "react";

function useWordGame(startingTime = 15) {
  const [text, setText] = useState("");
  const [time, setTime] = useState(startingTime);
  const [isTimeReaming, setIsTimeReaming] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const textUseRef = useRef(null);

  function hChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWord() {
    const wordArrey = text.trim().split(" ");
    return wordArrey.filter(word => word !== " ").length;
  }

  function startGame() {
    setIsTimeReaming(true);
    setTime(startingTime);
    setWordCount(0);
    setText("");
    textUseRef.current.disabled = false;
    textUseRef.current.focus();
  }

  function endGame() {
    setIsTimeReaming(false);
    setWordCount(calculateWord(text));
  }

  useEffect(() => {
    if (isTimeReaming && time > 0) {
      setTimeout(() => {
        setTime(t => t - 1);
      }, 1000);
    } else if (time === 0) {
      endGame();
    }
  }, [isTimeReaming, time]);

  return {
    textUseRef,
    hChange,
    text,
    isTimeReaming,
    startGame,
    time,
    wordCount
  };
}

export default useWordGame;
