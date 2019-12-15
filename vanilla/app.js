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
