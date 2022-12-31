const { Router } = require("express");
const fetch = require("node-fetch");
const { Types } = require("../db.js");

const router = Router();

router.get('/', async (req, res) => {
    const api = await fetch('https://pokeapi.co/api/v2/type');
    const types = await api.json();
    for( t of types.results ) {
        const existe = await Types.findOne({where: { name: t.name }})
        if(existe) return res.json(await Types.findAll())
        await Types.create({ name: t.name})
    }
    res.json(await Types.findAll());
})



module.exports = router;