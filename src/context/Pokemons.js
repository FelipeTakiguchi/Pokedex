import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PokemonsContext = React.createContext();
PokemonsContext.displayName = 'Pokemons';

export const PokemonsProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [index, setIndex] = useState("");
    const [url, setUrl] = useState("");
    const [weight, setWeight] = useState("");
    const [image, setImage] = useState("");
    const [types, setTypes] = useState([]);
    
    const navigate = useNavigate();

    async function findPokemon(){
        
        try{
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            // console.log(res);
            setIndex(res.data.id);
            setImage(res.data.sprites.front_default);
            setWeight(res.data.weight);
            setTypes(res.data.types);


            if(res)
                navigate(`/pokemon/${name}`);    
        } catch(err){
            console.log(err)
        }
    }

    return(
        <PokemonsContext.Provider
            value={{
                name, index, url, image, weight,
                setName, setIndex, setUrl,
                types, findPokemon
            }}
        >
            {children}
        </PokemonsContext.Provider>
    )
}