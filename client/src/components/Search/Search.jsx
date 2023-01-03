import React, { useState } from "react";
import style from "./search.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filters, getByName, order, type } from "../../redux/actions";

export const Search = () => {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState("");

  const options = useSelector((store) => store.types);
  const button = style.button;

  const handleInputChange = (e) => {
    setPokemons(e.target.value);
  };

  const byTipo = (e) => {
    dispatch(type(e.target.value));
  }
  
  const submit = (e) => {
    e.preventDefault();
    dispatch(getByName(pokemons));
    setPokemons("");
  };

  const creadoBy = (e) => {
    dispatch(filters(e.target.value))
  }

  const orderBy = (e) => {
    dispatch(order(e.target.value));
  }

  return (
    <div className={style.container}>
      <form onSubmit={submit}>
        <div className={style.field}>
          <input
            type="text"
            id="searchterm"
            value={pokemons}
            onChange={handleInputChange}
            placeholder="Find your pokemon"
          />
          <input className={button} type="submit" value="Find!" />
        </div>
      </form>
      <div className={style.field2}>
        <select className={button} name="Type" onChange={byTipo}>
          <option value="">Type</option>
          {options?.map((p) => (
            <option value={p.name} key={p.slot}>
              {p.name}
            </option>
          ))}
        </select>
        <select name="Origin" className={button} onChange={creadoBy}>
          <option value="0">Origin</option>
          <option value="1">DataBase</option>
          <option value="2">Created</option>
        </select>
        <select name="Sort" className={button} onChange={orderBy}>
          <option value="">Sort</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="fuerza+">Higher Level Attack</option>
          <option value="fuerza-">Lower Level Attack</option>
        </select>
      </div>
    </div>
  );
};
