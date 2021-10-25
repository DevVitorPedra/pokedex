import React, { useEffect} from 'react'
import { Link, } from 'react-router-dom'


export default function Favorites(props) {
    const storageFav =  JSON.parse(localStorage.getItem('favorites')) || []
    useEffect(() => {
        const favoritesSelector = document.querySelector('.favorites-selector')
        favoritesSelector.classList.add('show')
        return () => {
            favoritesSelector.classList.remove('show')
        }
    }, [])
    if(!storageFav<=0){
    return (
      <div className="pokedex">
        {storageFav.map((element, idx) => {
            return (
                <div key={idx + 1}>
                    <Link to={`/pokemon/${element.id}`}>
                        <div className="pokemon" style={{ 'backgroundColor': (props.color) }}>
                            <div className="card">
                                <h2>{element.name}</h2>
                                <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png`} alt={element.name}></img>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })}
    </div>
    )} else {
        return(<p>You have no favorite pokemons yet!</p>)
    }
}
/**  {(storageFav.length>0) ?:<p>You have no favorite pokemons yet!</p>} */