import React, { useState } from "react";
import "../styles/Sad.css";

const Sad = () => {
  const [mood, setMood] = useState(0);

  const happyMood = () => setMood(1);
  const sadMood = () => setMood(-1);

  // manage cat pic state
  const [cat, setCat] = useState(
    "https://media.giphy.com/media/uTCAwWNtz7U2c/giphy.gif"
  );

  const getMoreCats = async () => {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?api_key=${process.env.REACT_APP_CAT_KEY}`
    );
    const data = await res.json();
    setCat(data[0].url);
    console.log(data[0].url);
  };

  // manage cat fact state
  const [fact, setFact] = useState(
    "A cat that bites you for rubbing his stomach is often biting from pleasure, not anger."
  );
  const getMoreFacts = async () => {
    const res = await fetch("https://cat-fact.herokuapp.com/facts/random");
    const data = await res.json();
    setFact(data.text);
  };

  // manage pug pic state
  const [pug, setPug] = useState(
    "https://images.dog.ceo/breeds/pug/n02110958_13721.jpg"
  );

  const getMorePugs = async () => {
    const res = await fetch("https://dog.ceo/api/breed/pug/images/random");
    const data = await res.json();
    setPug(data.message);
  };

  return (
    <div className='Sad'>
      <div className='grid'>
        <div
          className={`left ${mood === 1 ? "expand" : ""} ${
            mood === -1 ? "hidden" : ""
          }`}
        >
          <div className='cat'>
            <img src={cat} alt='cat' />
            <br />
            <button
              className={mood === 0 ? "pushdown" : ""}
              onClick={mood === 0 ? happyMood : getMoreCats}
            >
              {mood === 0 ? "Drown my sorrow in pussy" : "More kitties!"}
            </button>
          </div>

          {mood === 1 ? (
            <div className='fact'>
              <div className='text'>{fact}</div>
              <button onClick={getMoreFacts}>Tell me more about cats</button>
            </div>
          ) : (
            ""
          )}
        </div>

        <div
          className={`right ${mood === -1 ? "expand expand-right" : ""} ${
            mood === 1 ? "hidden" : ""
          }`}
        >
          {mood === -1 ? (
            <div className='pug'>
              <img src={pug} alt='pug' />
              <br />
              <button onClick={getMorePugs}>Cute pugs</button>
            </div>
          ) : (
            ""
          )}

          <div className='playlist'>
            <iframe
              width='500'
              height='400'
              src='https://www.youtube.com/embed/videoseries?list=PLYdmqNloQpb-mk12ddQecidmFiLFerk67'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='sed :('
            ></iframe>{" "}
            <br />
            <button
              className={mood === 0 ? "pushdown" : "hidden-visibility"}
              onClick={mood === 0 ? sadMood : {}}
            >
              No! Let me wallow in my misery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sad;
