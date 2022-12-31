const { Router } = require("express");
const { Pokemon, Types } = require("../db.js");
const  getPokemonById = require("../controllers/getPokemonById.js");
const getAllPokemon = require("../controllers/getAllPokemon.js");
const getPokemonByName = require("../controllers/getPokemonByName.js");
const createPokemon = require("../controllers/createPokemon.js");

const router = Router();

router.get("/", async (req, res) => {
  let { name } = req.query;
  let pokemonInfo = [];
  if (name) {
    name = name.toLowerCase();
    pokemonInfo = await getPokemonByName(name);
    if (!pokemonInfo.length) return res.json({ message: "Pokemon Not Found" });
    return res.json(pokemonInfo);
  } else {
    pokemonInfo = await getAllPokemon();
    if (!pokemonInfo.length) return res.json({ message: "Nothing Here :( " });
  } 
  res.json(pokemonInfo);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pokemonInfo = await getPokemonById(id);
  if (!pokemonInfo.id) return res.json({ message: "Pokemon Not Found" });
  res.json(pokemonInfo);
});

router.post("/", async (req, res) => {
  let { name, hp, attack, defense, speed, height, weight, types } =
    req.body;
  if (
    isNaN(hp) ||
    isNaN(attack) ||
    isNaN(defense) ||
    isNaN(speed) ||
    isNaN(height) ||
    isNaN(weight)
  )
    return res.json({ message: "One of the arguments is not a number" });

  if (!name) return res.json({ message: "Name required" });

  const duplicate = await Pokemon.findOne({ where: { name: name } });
  if (duplicate) return res.json({ message: "Pokemon already exists" });
  const newPokemon = createPokemon(name, hp, attack, defense, speed, height, weight, types)
  res.json({ message: "Pokemon Created Correctly" });
  });

module.exports = router;
