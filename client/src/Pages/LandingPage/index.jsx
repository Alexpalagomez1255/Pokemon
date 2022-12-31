import React from "react";
import { Link } from "react-router-dom";
import style from "./landingpage.module.css";

export const LandingPage = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>
          <span>Find</span> all your <br />
          favorite <br />
          <span>Pokemon</span>
        </h1>
        <p>
          You can know the type of Pokemon, <br />
          its strengths, disadvantages and <br />
          abilities.
        </p>
        <Link to="/home">
          <input type="submit" value="See Pokemon" className={style.myButton} />
        </Link>

        <h3 className={style.love}>Hecho con &hearts; para henry</h3>
      </div>

      <div>
        <img src="img/pikachu.png" alt="" />
      </div>
    </div>
  );
};
