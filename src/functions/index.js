import axios from 'axios';

export const getDataPoke = async poke => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);

        return data.abilities.map(({ ability: { name } }) => name).sort();
    } catch (err) {
        return [];
    }
}