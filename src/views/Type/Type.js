import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { retrieveClass } from '../../utils/classColor'




export default function Type(props) {
  
    useEffect(() => {
       
    
        getTypes()
    }, [])
  
    const [types, setTypes ] = useState([])
    const [pokemonsByType,setPokemonsByType] = useState([])
    
    const getTypes = async () => {
        const url = 'https://pokeapi.co/api/v2/type/'
        const fetchTypes = await fetch(url)
        const data = await fetchTypes.json()
        console.log(data.results)
        setTypes(data.results)
    }
    
    useEffect(() => {
        const typesSelector= document.querySelector('.types-selector')
        typesSelector.classList.add('show')
        return () => {
            typesSelector.classList.remove('show')
        }
    }, [])
    console.log(pokemonsByType)
    return (
        <div className="by-types">
            <div className="links">
               {types.map((element, idx)=>{
               return ( <button key={idx+1}  className="btn-types" onClick={async ()=>{
                   const url = `https://pokeapi.co/api/v2/type/${idx+1}`
                   const byType = await fetch(url)
                   const dataByType = await byType.json()
                   setPokemonsByType(dataByType.pokemon)

               }}  style={{'backgroundColor':retrieveClass(element.name)}}>{element.name}</button>)
               })}
               
            
            </div>
            <div className="types-screen">
               {pokemonsByType.map((element,idx)=>{
                      let url= element.pokemon.url.split('/')
                   return( <div key={idx + 1}>
                    <Link to={`/pokemon/${url[6]}`}>
                        <div className="pokemon" style={{ 'backgroundColor': (props.color) }}>
                            <div className="card">
                                <h2>{element.pokemon.name}</h2>
                                <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url[6]}.png`} alt={element.pokemon.name}></img>
                            </div>
                        </div>
                    </Link>
                </div>)
               })}
       
            </div>
        </div>
    )
}
