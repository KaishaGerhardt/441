$(document).ready(function() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
    
    // Function to fetch Pokémon data using AJAX
    function getPokemonData(pokemonName) {
        $.ajax({
            url: apiUrl + pokemonName.toLowerCase(),
            type: "GET",
            success: function(data) {
                displayPokemonData(data);
            },
            error: function(xhr, status, error) {
                console.error("Error fetching Pokémon data:", error);
            }
        });
    }
    
    // Function to display Pokémon data
    function displayPokemonData(pokemon) {
        const pokemonData = `
            <h2>${pokemon.name.toUpperCase()}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
            <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
            <p><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
        `;
        $("#pokemon-data").html(pokemonData);
    }
    
    // Initial display of a random Pokémon
    const randomPokemonId = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon
    getPokemonData(randomPokemonId);
});
