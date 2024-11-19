import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';
import { useState } from 'react';

import classes from './MainHeader.module.css';

function MainHeader() {
  const [lightMode, setlightMode] = useState(false);

  function changeModeHandler() {
    setlightMode(prevState => !prevState)
    const reactPoster = document.getElementById('react-poster');
    const newPost = document.getElementById('newPost');
    const root = document.querySelector(':root');
    const header = document.getElementById('header');
    const empty = document.getElementById('empty');
    const modeChange = document.getElementById('modeChange');
      
      if (lightMode == true) {
        reactPoster.style.color = 'white';
        newPost.classList.remove(classes.buttonLight);
        modeChange.style.color = 'white';
        header.style.borderBottom = '2px solid white';
        root.style.background = 'black';
     
      }
      else {
        reactPoster.style.color = 'black';
        newPost.classList.add(classes.buttonLight);
        root.style.background = '#e6ddf9';
        header.style.borderBottom = '2px solid black' ;
        modeChange.style.color = 'black';
        
      }
    
  }
  return (
    <header id='header' className={classes.header}>
      <div>
      <h1 id='react-poster' className={classes.logo}>
        <MdMessage />
        React Poster
       
      </h1>
      </div>
      <div className={classes.new}>
      <p>
        <Link to='/Create-post' id='newPost' className= {classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
      <p className={classes.modeParagraph}> 
      <span id='modeChange' className={classes.mode}>Mode</span>
        <label className={classes.switch}>
        <input type="checkbox" id="toggleButton" onChange={changeModeHandler} />
        <span className={classes.slider}></span>
    </label>
    
    </p>
      </div>
    </header>
  );
}

export default MainHeader;