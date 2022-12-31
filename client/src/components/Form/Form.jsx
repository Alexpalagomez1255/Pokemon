import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../actions";
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
    vida: 0,
    fuerza: 0,
    defensa: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    tipos: [],
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
    const crear = await fetch("https://kevindex.herokuapp.com/pokemons", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    dispatch(getPokemons());
    const respuesta = await crear.json();
    console.log(respuesta);
    setData({
      name: "",
      vida: 0,
      fuerza: 0,
      defensa: 0,
      velocidad: 0,
      altura: 0,
      peso: 0,
      tipos: [],
    });
  };

  return (
    <div className={style.containerCreate}>
      <form action="POST" className={style.form} onSubmit={submit}>
        <div className={style.separado}>
          <h1>Crea tu propio Pokemon</h1>
          <p className={errors.name ? style.danger : style.question}>
            <label>Pokemon name</label>
            <input
              type="text"
              placeholder="pikachu.."
              name="name"
              value={data.name}
              onChange={handleInputChange}
              required
            />
          </p>
          {errors.name ? <p className="danger">{errors.username}</p> : null}
          <p className={style.question}>
            <label>Vida</label>
            <input
              type="number"
              name="vida"
              value={data.vida}
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>Fuerza</label>
            <input
              type="number"
              name="fuerza"
              value={data.fuerza}
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>Defensa</label>
            <input
              type="number"
              name="defensa"
              value={data.defensa}
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>Velocidad</label>
            <input
              type="number"
              name="velocidad"
              value={data.velocidad}
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>Altura</label>
            <input
              type="number"
              name="altura"
              value={data.altura}
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>Peso</label>
            <input
              type="number"
              name="peso"
              value={data.peso}
              onChange={handleInputChange}
            />
          </p>
        </div>

        <div className={style.hiddenCB}>
          <h1>Tipos</h1>
          <div className={style.tipos}>
            {options?.map((t) => (
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
            <input type="submit" value="Crear" className={style.submit} />
          </div>
        </div>
      </form>
    </div>
  );
};
