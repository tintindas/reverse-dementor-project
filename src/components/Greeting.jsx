import React from "react";
import "../styles/Greetings.css";

const Greeting = () => {
  return (
    <div className='Greetings'>
      <p className='first'>
        Hey there, Little Panda Bear{" "}
        <span role='img' aria-label='heart emoji'>
          {" "}
          💖{" "}
        </span>{" "}
        !
      </p>
      <p className='second'>How are you doing today?</p>
    </div>
  );
};

export default Greeting;
