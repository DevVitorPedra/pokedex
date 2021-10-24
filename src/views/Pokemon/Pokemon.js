import React, { useState } from 'react'

export default function Pokemon(match) {
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
        async function getPokemon(){
        const url = `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
        const fetchPokemon = await fetch(url)
        const data = await fetchPokemon.json()
        console.log(data)
        setPokemon({
            name: data.name,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            spAtk: data.stats[3].base_stat,
            spDef: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
            ability1: data.abilities[0].abilitiy.name,
            ability1: data.abilities[1] ? data.abilities[1].abilitiy.name : '',
            type1: data.types[0].type.name,
            type2: data.types[1] ? data.types[1].type.name : '',

        }
        )
    }
    getPokemon()
}, [match.params.id])
    /**TODO card do pokemon */
    return (
        <div>
            <p>Single Pokemon </p>
        </div>
    )
}
