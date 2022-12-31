const fetch = require("node-fetch");
const { Pokemon, Types } = require("../db.js");

const getPokemonById = async (id) => {
  try {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await api.json();

    const pokemonId = {
      id: data.id,
      name: data.name,
      type: data.types.map((t) => t.type.name),
      img: data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
      vida: data.stats[0].base_stat,
      fuerza: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      velocidad: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
    };

    return pokemonId;
  } catch (error) {}
  try {
    const db = await Pokemon.findByPk(id, { include: Types });
    const pokemonDb = {
      id: db.idPoke,
      name: db.name,
      type: db.types.map((t) => t.name),
      img: "https://media.tenor.com/1W4gpgv6GU8AAAAd/sus-eyebrow.gif",
      vida: db.hp,
      fuerza: db.attack,
      defensa: db.defense,
      velocidad: db.speed,
      height: db.height,
      weight: db.weight,
    };

    return pokemonDb;
  } catch (error) {
    return {};
  }
};

module.exports = getPokemonById;
