import React, { useState, useEffect } from "react";
import "../styles/Bored.css";
import poems from "../assets/poems";

const Bored = () => {
  const formatPoem = (text) => {
    const lines = text.split("\n");
    return lines;
  };

  const [poem, setPoem] = useState(
    poems[Math.floor(Math.random() * poems.length)]
  );
  useEffect(() => {
    setLines(formatPoem(poem.text));
  }, [poem]);

  const [lines, setLines] = useState(formatPoem(poem.text));

  const getPoem = () => {
    const poem = poems[Math.floor(Math.random() * poems.length)];
    setPoem(poem);
  };

  return (
    <div className='Bored'>
      <div className='box'>
        <div className='title'>{poem.title}</div>
        <div className='text'>
          {lines.map((line) => {
            return <p>{line}</p>;
          })}
        </div>
        <div className='poet'>{poem.poet}</div>
      </div>
      <button onClick={getPoem}>&gt;</button>
    </div>
  );
};

export default Bored;
