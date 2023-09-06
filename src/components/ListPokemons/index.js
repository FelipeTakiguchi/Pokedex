import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { PokemonsContext } from '../../context/Pokemons';

export default function ListPokemons() {
    const { setName, findPokemon } = useContext(PokemonsContext);

    

    return (
        <>
            <div className={styles.center}>
                <input className={styles.rounded} type='text' onChange={(e) => setName(e.target.value)} placeholder='Pokémon'></input>
                <button className={styles.rounded} onClick={findPokemon}>Find</button>
            </div>
        </>
    )
}