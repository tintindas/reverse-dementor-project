import React, { useState, useEffect } from "react";
import panda from "../assets/ramen-panda.png";
import Greeting from "./Greeting";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const linkStyle = {
    textDecoration: "none",
  };

  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => setImgLoaded(true), []);

  return (
    <div className='Home'>
      <img
        src={panda}
        className={imgLoaded ? "" : "hidden"}
        alt='cartoon panda eating ramen'
        loading='lazy'
      />
      <Greeting />
      <div className='grid'>
        <Link to='/happy' style={linkStyle}>
          <div className='card card-green'>
            <p>
              {" "}
              <span role='img' aria-label='happy jazz hands'>
                🌻
              </span>{" "}
              Happy{" "}
              <span role='img' aria-label='happy jazz hands'>
                🌻
              </span>{" "}
            </p>
          </div>
        </Link>
        <Link to='/bored' style={linkStyle}>
          <div className='card card-yellow'>
            <p>
              <span role='img' aria-label='sleepy emoji'>
                🥱
              </span>{" "}
              Bored{" "}
              <span role='img' aria-label='sleepy emoji'>
                🥱
              </span>
            </p>
          </div>
        </Link>
        <Link to='/sad' style={linkStyle}>
          <div className='card card-blue'>
            <p>
              {" "}
              <span role='img' aria-label='crying emoji'>
                😢
              </span>
              Sad{" "}
              <span role='img' aria-label='crying emoji'>
                😢
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
