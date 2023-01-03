import React from "react";
import { Link } from "react-router-dom";
import style from "./landingpage.module.css";

export const LandingPage = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>
          <span>Here</span> you'll <br />
          find all your<br />
          <span>Favorites Pokemon</span>
        </h1>
        <p>
          From pikachu to Wigglytuff, <br />
          From Grass type to Dragon types! <br />
          Everything about pokemon!!! <br/>
          Everything
        </p>
        <Link to="/home">
          <input type="submit" value="Gotta cachem' all" className={style.myButton} />
        </Link>
        
        </div>
        
      <div>
        <img src="img/blackmew.png" alt="" />
      </div>
    </div>
  );
};
