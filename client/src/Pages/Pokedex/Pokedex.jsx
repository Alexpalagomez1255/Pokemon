import React, { useState } from "react";
import style from "./pokedex.module.css";
import { Card } from "../../components/Cards/Card";
import { Search } from "../../components/Search/Search";
import { useSelector } from "react-redux";
import { ordered, tipos } from "../../helpers/filtros";

export const Pokedex = () => {
  let pokemons = useSelector((store) => store.pokemons);
  const type = useSelector((store) => store.type);
  const order = useSelector((store) => store.order);

  if (type) pokemons = tipos(type, pokemons);
  if (order) pokemons = ordered(order, pokemons);

  const [page, setPage] = useState(0);

  const pagination = () => {
    if (pokemons.length) return pokemons.slice(page, page + 9);
    if (pokemons.info) return pokemons;
    return [];
  };

  const array = pagination();

  const nextPage = () => {
    if (pokemons.length > page + 9) {
      setPage(page + 9);
    }
  };

  const previusPage = () => {
    if (page > 0) {
      setPage(page - 9);
    }
  };

  return (
    <div className={style.container}>
      <Search />
      <div className="botones">
        <button onClick={previusPage} className="pages">
          &laquo; Previus
        </button>
        <button onClick={nextPage} className="pages">
          Next &raquo;
        </button>
      </div>
      <Card
        array={array}
        img={"https://c.tenor.com/F30e8arYkdYAAAAC/pokemon-spinning.gif"}
      />
    </div>
  );
};
