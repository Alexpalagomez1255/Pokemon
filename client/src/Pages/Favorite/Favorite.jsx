import React from "react";
import style from "./favorite.module.css";
import { Card } from "../../components/Cards/Card";
// import { useSelector } from "react-redux";

export const Favorite = () => {
  const fav = () => {
    if( localStorage.getItem("Fav")) {
      let array = localStorage.getItem("Fav");
      array = JSON.parse(array);
      return array;
    }
    return []
  }

  const array = fav();
  return (
    <div className={style.container}>
      <Card array={array} img={'https://media.tenor.com/NwjkKZzlXJ0AAAAd/pokemon-pokemon-journeys.gif'}/>
    </div>
  );
};
