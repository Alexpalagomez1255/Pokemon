import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import style from "./pokemon.module.css";
import lujoball from "../../img/lujoball.png"
export const Pokemon = () => {
  const { id } = useParams();
  //const history = useHistory();

  const [pokemon, setPokemon] = useState({});

  const addFavorite = (obj) => {
    let array = [];
    if (localStorage.getItem("Fav")) {
      array = localStorage.getItem("Fav");
      array = JSON.parse(array);
      if (array.length >= 8) array.shift();
      array.push(obj);
      localStorage.setItem("Fav", JSON.stringify(array));
    } else {
      array.push(obj);
      localStorage.setItem("Fav", JSON.stringify(array));
    }
    //history.push("/favorite");
  };

  useEffect(() => {
    detalles();
  }, []);

  const detalles = async () => {
    const data = await fetch(`https://pokeserver.onrender.com/pokemons/${id}`);

    const pokemon = await data.json();
    setPokemon(pokemon);
  };

  return (
    <div className={style.container}>
      <div className={style.pokemon}>
        <h1>{pokemon.name}</h1>
        <h2>Id:{pokemon.id}</h2>
        <div className={style.img}>
          <img src={pokemon.img} alt="" />
          <div className={style.parrafo}>
            <p>Weight: {pokemon.weight}kg</p>
            <p>Height: {pokemon.height/10} m</p>
          </div>
        </div>
      </div>
      <div className={style.favorite}>
        <p>Catch'em!!!</p>
        <button
          onClick={() => {
            addFavorite({
              id: pokemon.id,
              name: pokemon.name,
              type: pokemon.type,
              img: pokemon.img,
            });
          }}
        >
          <img
            src={lujoball}
            alt=""
          />
        </button>
      </div>
      <div className={style.type}>
          {pokemon.type
            ? pokemon?.type.map((t) => <h3 className={style.types}>{t}</h3>)
            : null}
        </div>
        <div className={style.meter}>
          <div className={style.stats1}>
            <div>HP: {pokemon.vida}</div>
            <div>ATTACK: {pokemon.fuerza}</div>
          </div>
          <div className={style.stats2}>
            <div>DEFENSE: {pokemon.defensa}</div>
            <div>SPEED: {pokemon.velocidad}</div>
          </div>
        </div>
    </div>
  );
};
