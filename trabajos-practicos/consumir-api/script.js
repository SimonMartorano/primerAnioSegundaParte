"use strict";

const pokemonTypeUrl = "https://pokeapi.co/api/v2/type/";
const pokemonNameUrl = "https://pokeapi.co/api/v2/pokemon/";

const $select = document.querySelector("select");
const $images = document.querySelector(".pokemon-images");

async function loadPokemons(type) {
  const pokemonNames = [];

  let response = await fetch(pokemonTypeUrl + type);

  if (!response.ok) {
    console.log(pokemonTypeUrl + type);
    return;
  }

  let data = await response.json();

  const cantidadPokemones = data.pokemon.length;

  const indexes = [];

  while (pokemonNames.length < 4) {
    let randomIndex = Math.round(Math.random() * (cantidadPokemones - 1));

    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
      pokemonNames.push(data.pokemon[randomIndex].pokemon.name);
    }
  }

  for (let i = 0; i < 4; i++) {
    let response = await fetch(pokemonNameUrl + pokemonNames[i]);

    if (!response.ok) {
      console.log(pokemonNameUrl + pokemonNames[i]);
      return;
    }

    let data = await response.json();

    $images.innerHTML += 
    `
      <div class="card">
        <img src="${data.sprites.other["official-artwork"]["front_default"]}" alt="${pokemonNames[i]}">
        <h2>${data.name}</h2>
        <p>Tipo: ${data.types[0].type.name}</p>
        <p>Altura: ${data.height / 10} m</p>
        <p>Peso: ${data.weight / 10} kg</p>
      </div>
    `

  }
}

$select.addEventListener("change", () => {
  $images.innerHTML = "";

  if ($select.value != "none") {
    loadPokemons($select.value);
  }
});
