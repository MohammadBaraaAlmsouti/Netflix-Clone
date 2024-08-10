import React from 'react';
import classes from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.hero}>
        <img src={hero_banner} alt="" className={classes['banner-img']} />
        <div className={classes['hero-caption']}>
          <img src={hero_title} alt="" className={classes['caption-img']} />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className={classes['hero-btns']}>
            <button className={classes.btn}>
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className={`${classes.btn} ${classes['dark-btn']}`}>
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          {/* <TitleCards category="now_playing"/> */}
        </div>
      </div>
      <div className={classes['more-cards']}>
        <TitleCards title={'Blockbuster Movies'} category="top_rated" />
        <TitleCards title={'Only On Netflix'} category="popular" />
        <TitleCards title={'Upcomming'} category="upcoming" />
        <TitleCards title={'Top Pics For You'} category="now_playing" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
