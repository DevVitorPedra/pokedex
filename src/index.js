import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.css'
import '../src/views/PokemonsList/PokemonsList.css'
import '../src/views/Pokemon/Pokemon.css'
import "../src/views/Type/Type.css"
import './mobile.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

