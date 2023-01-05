import React, { useState } from "react";
import style from "./pokedex.module.css";
import { Card } from "../../components/Cards/Card";
import { Search } from "../../components/Search/Search";
import { useSelector } from "react-redux";
import { ordered, types } from "../../Filters/filtros";

export const Pokedex = () => {
  let pokemons = useSelector((store) => store.pokemons);
  const type = useSelector((store) => store.type);
  const order = useSelector((store) => store.order);

  if (type) pokemons = types(type, pokemons);
  if (order) pokemons = ordered(order, pokemons);

  const [page, setPage] = useState(0);

  const pagination = () => {
    if (pokemons.length) return pokemons.slice(page, page + 9);
    if (pokemons.info) return pokemons;
    return [];
  };

  const array = pagination();

  const nextPage = () => {
    if (pokemons.length > page + 12) {
      setPage(page + 12);
    }
  };

  const previusPage = () => {
    if (page > 0) {
      setPage(page - 12);
    }
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <div className={style.container}>
      <Search />
      <button onClick={reset} className={style.reset}>
          Reset
        </button>
      <div className="botones">
        <button onClick={previusPage} className="pages">
          &laquo; Previous
        </button>
        <button onClick={nextPage} className="pages">
          Next &raquo;
        </button>
      </div>
      <Card
        array={array}
        img={
          "https://media.tenor.com/z7Zy8aEZSvsAAAAi/ash-now-loading-dark.gif"
        }
      />
    </div>
  );
};
