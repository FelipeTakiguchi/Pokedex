import { useCallback, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';
import { PokemonsContext } from '../../context/Pokemons';

export default function Describer() {
    const { name, index, image, types, weight } = useContext(PokemonsContext);
    return (
        <div className={styles.center}>
            <h1 className={styles.index}>#{index}</h1>
            <form className={styles.styled__form}>
                <p className={styles.name}>{name}</p>
                <img src={`${image}`} />
                <div className={styles.container}>
                    {
                        types.length>0&&types.map(type => {
                            return (
                                <>
                                    <div className={`${styles[type.type.name]} ${styles.type}`} key={type.type.name}>
                                        <p>{type.type.name}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <p>Weight: {weight}</p>
                </div>
            </form>
        </div>
    )
}

// https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3