import React, { Fragment, useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  async function retrieve() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const pokemon = await response.json();

    setList(pokemon.results);
  }

  return (
    <Fragment>
      <h1>Pokemon</h1>
      <button onClick={retrieve}>Get</button>
      <ul>
        {
          list.map(item => <li key={item.name}>{item.name}</li>)
        }
      </ul>
    </Fragment>
  );
}

export default App;
