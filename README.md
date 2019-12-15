# Comparsion between React and vanilla JavaScript

This repository serves as a comparsion between React.js and vanilla JavaScript.

The vanilla directory contains the vanilla JavaScript code and the modern directory contains the React.js code. The React.js project was create with create-react-app.

## Setup

Both projects query the PokéAPI and render the result as a list of li tags containing the name of the pokemon.

## Vanilla JavaScript

```javascript
const listParent = document.getElementById('list');

async function retrieve() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const pokemon = await response.json();

  listParent.innerHTML = '';

  for (const item of pokemon.results) {
    const listElement = document.createElement('li');
    listElement.innerText = item.name;
    listParent.appendChild(listElement);
  }
}
```

The first line `const listParent = document.getElementById('list');` queries the HTML element with the id __list__. This HTML element is a basic `ul` tag with an id (`<ul id="list"></ul>`).

The next lines repesents our retrieve function. This function is bound to the button like this `<button onclick="retrieve()">Get</button>`. This function is responsible for querying the PokéAPI and setting the result to the `ul` tag.

## React.js

```javascript
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
```