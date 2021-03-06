import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React from 'react'
import Favorites from './views/Favorites/Favorites';
import Type from './views/Type/Type';
import PokemonsList from './views/PokemonsList/PokemonsList';
import Pokemon from './views/Pokemon/Pokemon';
import Intro from './views/Intro/Intro';

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
            <Route exact path={'/'} component={Intro} ></Route>
            <Route path={'/pokemon/:id'} component={Pokemon} />
            <Route path={'/favorites'} component={Favorites} />
            <Route path={'/pokemons-list'} component={PokemonsList} />
            <Route path={'/types'} component={Type} />
           
          </Switch>

        </div >
        <div className="external-routes">
          <div className="routes">
            <div className="routes-btns">
              <div className="routes-selector">
                <span className="pokemons-selector"><i className="bi bi-caret-right-fill"></i></span> <Link to={'/pokemons-list'}><button className="btn"><i className="bi bi-list-ol"></i> Pokemons</button></Link>
              </div>
              <div className="routes-selector">
                <span className="favorites-selector"><i className="bi bi-caret-right-fill"></i></span><Link to={'/favorites'}><button className="btn"><i className="bi bi-heart"></i> Favorites</button></Link>
              </div>
              <div className="routes-selector">
                <span className="types-selector"><i className="bi bi-caret-right-fill"></i></span><Link to={'/types'}> <button className="btn"><i className="bi bi-x-diamond"></i> Types</button></Link>
              </div>
            </div>
            <div className="description-text">
              <p>Welcome to my Pokedex.<br></br>
                Choose one pokemon to see its stats<br></br>
                If you like it, you can save in your favorites list.
                You can also list them by type.</p>

            </div>
      

          </div>
          
        </div>


      </div>
    </Router>




  );
}

export default App;
