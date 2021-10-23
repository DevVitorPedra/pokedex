import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React from 'react'
import './views/MainMenu/main-menu.css'
import Favorites from './views/Favorites/Favorites';
import Type from './views/Type/Type';
import PokemonsList from './views/PokemonsList/PokemonsList';
function App() {
  return (
    <Router>
      <div className="intro">
        <div className="intro-image">
          <button className="press-start" onClick={() => {
            const intro = document.querySelector('.intro')
            intro.classList.add('will-hide')
            setTimeout(() => {
              intro.remove()
            }, 1000)
          }}>PRESS START</button>
        </div>
      </div>
      <div className="main-menu">
        <div className="display">
          <Switch>
            <Route path={'/favorites'} component={Favorites} />
            <Route path={'/pokemons-list'} component={PokemonsList} />
            <Route path={'/type'} component={Type} />
          </Switch>

        </div>
        <div className="routes">
          <div>
            <Link to={'/pokemons-list'}><button className="btn">Pokemons List</button></Link>
          </div>
          <div>
            <Link to={'/favorites'}><button className="btn">Favorites</button></Link>
          </div>
          <div>
            <Link to={'/type'}> <button className="btn">Types</button></Link>
          </div>
        </div>


      </div>
    </Router>




  );
}

export default App;
