import React from "react";
import panda from "../assets/ramen-panda.png";
import Greeting from "./Greeting";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className='Home'>
      <img src={panda} alt='cartoon panda eating ramen' />
      <Greeting />
      <div className='grid'>
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
      </div>
    </div>
  );
};

export default Home;
