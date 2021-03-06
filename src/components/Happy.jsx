import React, { useState } from "react";
import "../styles/Happy.css";
import newton from "../assets/newton.jpg";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const Happy = () => {
  const [dogPic, setDogPic] = useState(newton);

  const getNewDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");

    const resJson = await res.json();

    setDogPic(resJson.message);
  };

  const [joke, setJoke] = useState(
    "The number of vampires in the average home, is inversely proportional to the amount of garlic bread in the fridge."
  );

  const getNewJoke = async () => {
    const res = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const data = await res.json();

    setJoke(data.joke);
  };

  return (
    <div className='Happy'>
      <div className='happyGrid'>
        <div className='dog'>
          <h1>Here's a free Doggo with your happy meal</h1>
          <SwitchTransition>
            <CSSTransition key={dogPic} timeout={1000} classNames='picfade'>
              <img src={dogPic} alt='dog' loading='lazy' />
            </CSSTransition>
          </SwitchTransition>
          <br />
          <button onClick={getNewDog}>Show me more puppies</button>
        </div>

        <div className='playlist'>
          <h2>Some Happy Music for my Happy Puppy</h2>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/videoseries?list=PLYdmqNloQpb87z2N3ePDvIZruB8dcH5CR'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='happy puppy playlist'
            loading='lazy'
          ></iframe>
        </div>

        <div className='joke'>
          <div>{joke}</div>
          <button onClick={getNewJoke}>Ruin my mood with more bad jokes</button>
        </div>
      </div>
    </div>
  );
};

export default Happy;
