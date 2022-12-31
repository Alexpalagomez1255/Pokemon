const fetch = require("node-fetch");
const { Pokemon, Types } = require("../db.js");


  const getPokemonByName = async (name) => {
    try {
      const db = await Pokemon.findOne({
        where: {
          name: name,
        },
        include: Types,
      });
      if (db) {
        const pokemonDb = [
          {
            id: db.id,
            idPoke: db.idPoke,
            name: db.name,
            type: db.types.map((t) => t.name),
            img: "https://media.tenor.com/1W4gpgv6GU8AAAAd/sus-eyebrow.gif",
          },
        ];
        return pokemonDb;
      } else {
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await api.json();
        const pokemonName = [
          {
            id: data.id,
            name: data.name,
            type: data.types.map((t) => t.type.name),
            img: data.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
          },
        ];
        return pokemonName;
      }
    } catch (error) {
      return [];
    }
  };


module.exports= getPokemonByName