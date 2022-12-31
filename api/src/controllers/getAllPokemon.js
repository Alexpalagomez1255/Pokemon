const fetch = require("node-fetch");
const { Pokemon, Types } = require("../db.js");

const getAllPokemon = async () => {
  // return "ready from pokemon"
  const api = await fetch("https://pokeapi.co/api/v2/pokemon?limit=40");
  const data = await api.json();
  let results = [...data.results];
  console.log(results)
  let pokemonInfo = [];
  for (i = 0; i < results.length; i++) {
    if (!results[i]) return pokemonInfo.concat("Empty");
    if (results[i].url) {
      const pokemon = await fetch(results[i].url);
      const info = await pokemon.json();
      console.log(info)

      pokemonInfo.push({
        id: info.id,
        name: info.name,
        type: info.types.map((t) => t.type.name),
        img: info.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
        fuerza: info.stats[1].base_stat,
      });
    }
    // return pokemonInfo;
  }
  const db = await Pokemon.findAll({ include: Types });
  let dbase = [...db];

  let pokemondb = [];
  for (i = 0; i < dbase.length; i++) {
    if (!dbase[i]) {
      return pokemondb;
    } else {
      pokemondb.push({
        id: dbase[i].id,
        idPoke: dbase[i].idPoke,
        name: dbase[i].name,
        type: dbase[i].types.map((t) => t.name),
        attack: dbase[i].attack,
        img: "https://media.tenor.com/1W4gpgv6GU8AAAAd/sus-eyebrow.gif",
      });
    }
    // return pokemondb;
  }

  return [...pokemonInfo, ...pokemondb];
};

module.exports = getAllPokemon;
