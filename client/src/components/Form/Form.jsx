import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import style from "./form.module.css";

export const Form = () => {
  const dispatch = useDispatch();
  const options = useSelector((store) => store.types);

  const validate = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = "El name es obligatorio";
    }

    return errors;
  };

  const [data, setData] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    if (e.target.name !== "name") {
      setData({
        ...data,
        [e.target.name]: Number(e.target.value) <= 0 ? 0 : e.target.value,
      });
    } else {
      setErrors(
        validate({
          ...data,
          [e.target.name]: e.target.value,
        })
      );
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const checkbox = (e) => {
    if (data.tipos.includes(e.target.value)) {
      data.tipos = data.tipos.filter((id) => id !== e.target.value);
      setData({
        ...data,
        tipos: data.tipos,
      });
    } else {
      setData({
        ...data,
        tipos: [...data.tipos, e.target.value],
      });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const create = await fetch("http://localhost:3001/pokemons", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    dispatch(getPokemons());
    const respuesta = await create.json();
    console.log(respuesta);
    setData({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: [],
    });
  };

  return (
    <div className={style.container}>
      <form action="POST" className={style.form} onSubmit={submit}>
        <div className={style}>
          <h1>Create your Pokemon!!!</h1>
          <p className={errors.name ? style.danger : style.question}>
            <label>Pokemon name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              required
            />
          </p>
          {errors.name ? <p className="danger">{errors.username}</p> : null}
          <p className={style.question}>
            <label>HP</label>
            <input
              type="number"
              name="Hp"
              value={data.vida}
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>ATTACK</label>
            <input
              type="number"
              name="attack"
              value={data.fuerza}
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>DEFENSE</label>
            <input
              type="number"
              name="defense"
              value={data.defensa}
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>speed</label>
            <input
              type="number"
              name="speed"
              value={data.velocidad}
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>height</label>
            <input
              type="number"
              name="height"
              value={data.altura}
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>weight</label>
            <input
              type="number"
              name="weight"
              value={data.peso}
              onChange={handleInputChange}
            />
          </p>
        </div>

        <div className={style.hiddenCB}>
          <input type="submit" value="create" className={style.submit} />
          <h1>Types</h1>
          <div className={style.tipos}>
            {options.slice(0, 10)?.map((t) => (
              <div key={t.slot}>
                <input
                  type="checkbox"
                  name={t.name}
                  value={t.slot}
                  id={t.slot}
                  onChange={checkbox}
                />
                <label htmlFor={t.slot}>{t.name}</label>
                {t.slot % 4 === 0 ? <br /> : null}
              </div>
            ))}
          </div>
          <div className={style.tipos}>
            {options.slice(11, 20)?.map((t) => (
              <div key={t.slot}>
                <input
                  type="checkbox"
                  name={t.name}
                  value={t.slot}
                  id={t.slot}
                  onChange={checkbox}
                />
                <label htmlFor={t.slot}>{t.name}</label>
                {t.slot % 4 === 0 ? <br /> : null}
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};
