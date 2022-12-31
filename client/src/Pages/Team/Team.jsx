import React from "react";
import style from "./team.module.css";
import { Card } from "../../components/Cards/Card";
import { useSelector } from "react-redux";

export const Team = () => {
  const team = () => {
    if( localStorage.getItem("team")) {
      let array = localStorage.getItem("team");
      array = JSON.parse(array);
      return array;
    }
    return []
  }

  const array = team();
  return (
    <div className={style.container}>
      <Card array={array} img={'https://media.giphy.com/media/SS4imysASHTHUsXyt6/source.gif?cid=ecf05e47q1uzwaxgylgvwkmsxvhlchbh8kvqe1bmf2emb35d&rid=source.gif&ct=s'}/>
    </div>
  );
};
