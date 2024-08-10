import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './TitleCards.module.css';
import cards_data from '../../assets/cards/Cards_data';
const TitleCards = (props) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTJhYTViMjRjZGM4Mzc3OGM1NGE1NTE0ZDZmNzE5NSIsIm5iZiI6MTcyMTMwNjc2MC45OTM2NzgsInN1YiI6IjY2OTUzZmQwMDdhNmI1MjhmNDVjMDEwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FA8aw50RqFAurPZc102IoeWfAvVrug63gOwYvkeuMWo',
    },
  };

  const handWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.category}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener('wheel', handWheel);
  }, []);

  return (
    <div className={classes['title-cards']}>
      <h2>{props.title ? props.title : 'Poupler On Netflix'}</h2>
      <div className={classes['card-list']} ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link
              to={`/player/${card.id}`}
              className={classes.card}
              key={index}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
