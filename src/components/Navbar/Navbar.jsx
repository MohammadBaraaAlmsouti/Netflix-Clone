import React, { useEffect, useRef } from 'react';
import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';
const Navbar = () => {
  const navRev = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRev.current.classList.add(classes['nav-dark']);
      } else {
        navRev.current.classList.remove(classes['nav-dark']);
      }
    });
  }, []);

  return (
    <div ref={navRev} className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Populer</li>
          <li>My List</li>
          <li>Browse By Langusges</li>
        </ul>
      </div>
      <div className={classes.navbarRight}>
        <img src={search_icon} className={classes.icons} />
        <p>Chlidren</p>
        <img src={bell_icon} className={classes.icons} />

        <div className={classes.navbarProfile}>
          <img src={profile_img} className={classes.profile} />
          <img src={caret_icon} />
          <div className={classes.dropdown}>
            <p
              onClick={() => {
                logout();
              }}
            >
              Sing Out Of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
