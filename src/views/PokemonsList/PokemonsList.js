
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function PokemonsList(props) {

    useEffect(() => {
       
        const pokemonSelector = document.querySelector('.pokemons-selector')
        pokemonSelector.classList.add('show')
        
        getData()
    }, [])
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(pokemons)

    const getData = async () => {
        
        const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898'
        const data = await fetch(url)
        const list = await data.json()
        setLoading(false)
      console.log(list.results)
        return setPokemons(list.results)
       
    }
    useEffect(() => {
        const pokemonSelector = document.querySelector('.pokemons-selector')
        pokemonSelector.classList.add('show')
        return () => {
            pokemonSelector.classList.remove('show')
        }
    }, [])
    
    return (
        (loading) ? <div className="loading"  alt="pokeball"></div> :   (  <div className="pokedex">
        {pokemons.map((element, idx) => {
            return (
                <div key={idx + 1}>
                    <Link to={`/pokemon/${idx + 1}`}>
                        <div className="pokemon" style={{ 'backgroundColor': (props.color) }}>
                            <div className="card">
                                <h2>{element.name}</h2>
                                <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 1}.png`} alt={element.name}></img>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })}
    </div>)

    )
}
