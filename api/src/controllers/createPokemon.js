const { Pokemon, Types } = require("../db.js");

const createPokemon = async (
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types
) => {
  // console.log(`Ready from create ${name}, ${hp}, ${defense}, ${speed}, ${height}, ${weight}, ${types}`)
  // return `Ready from create ${name}, ${hp}, ${defense}, ${speed}, ${height}, ${weight}, ${types}`
  const newPokemon = await Pokemon.create({
    name: name.toLowerCase(),
    hp: Number(hp),
    attack: Number(attack),
    defense: Number(defense),
    speed: Number(speed),
    height: Number(height),
    weight: Number(weight),
  });
  if (newPokemon && types && Array.isArray(types)) {
    const typesMap = types.map(async (t) => {
      let type = await Types.findAll({
        where: { name: t.name },
      });
      return newPokemon.setTypes(type);
    });
    await Promise.all(typesMap);
  }
  
};

module.exports = createPokemon;
