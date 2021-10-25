import React, { useState, useEffect } from 'react'
import { retrieveClass } from '../../utils/classColor'
const favoriteHeart = 0
const favorites = localStorage.getItem('favorites') || []
export default function PokemonsList({ match }) {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        async function getPokemon() {
            const url = `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
            const fetchPokemon = await fetch(url)
            const data = await fetchPokemon.json()
            console.log(data)
            setPokemon(
                {
                    name: data.name,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    spAtk: data.stats[3].base_stat,
                    spDef: data.stats[4].base_stat,
                    speed: data.stats[5].base_stat,
                    ability1: data.abilities[0].ability.name,
                    ability2: data.abilities[1] ? data.abilities[1].ability.name : '',
                    type1: data.types[0].type.name,
                    type2: data.types[1] ? data.types[1].type.name : ''
                }
            )
        }
        getPokemon()
    }, [match.params.id])

    function handleFavorite(){
       
    
    }

    console.log(pokemon)
    if (!pokemon) {
        console.log('nothing')
        return <p>Carregando info...</p>
    }

    return (

        <div className="single-pokemon-item" >
            <div className="color-card-pokemon" style={{ 'backgroundColor': retrieveClass(pokemon.type1) }}>
                <h1 className="pokemon-name">{pokemon?.name}</h1>
               
                <img className="single-pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${match.params.id}.png`} alt={pokemon.name}></img>
                 <button  className="favorites" onDoubleClick={handleFavorite}><i class="bi bi-heart"></i></button>
            </div>
            <div className="pokemon-stats" style={{ 'backgroundColor': retrieveClass(pokemon.type1) }} >
                <p><strong>Stats:</strong></p>
                <div className="card-stats" >


                    <div className="pokemon-stats-1">
                        <p>HP: {pokemon?.hp}</p>
                        <p>Atk: {pokemon.attack}</p>
                        <p>Def: {pokemon.defense}</p>

                        <p>Sp.Atk:{pokemon.spAtk} </p>
                        <p>Sp.Def:{pokemon.spDef} </p>
                        <p>Speed:{pokemon.speed} </p>
                    </div>
                </div>
                <br></br>
                <p><strong>Abilities:</strong></p>
                <div className="abilities">


                    <p> {pokemon.ability1}</p>
                    {pokemon.ability2 ? <p>{pokemon.ability2}</p> : null}
                </div>
                <br></br>
                <p><strong>{pokemon.type2 ? 'Types:' : 'Type:'}</strong></p>
                <div className="types">
                    <p>{pokemon.type1}</p>
                    {pokemon.type2 ? <p>{pokemon.type2}</p> : null}

                </div>
            </div>

        </div>
    )
}

