import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IListMovies } from './interface';

export const ListMovies: React.FC<IListMovies> = ({
    listaDeFilmes
}) => {

    const [nomeFilme, setNomeFilme] = useState <string | null>('') 
    const [filmesVistos, setFilmesVistos] = useState <Array<any>> ([])

    useEffect(() => {
        console.log('carregou 1')
    },[filmesVistos])

    useEffect(() => {
        console.log('carregou 2', nomeFilme)
        const listaAux = filmesVistos
        listaAux.push(nomeFilme)
        setFilmesVistos(listaAux)
    },[nomeFilme] )

    const exibicao = (item: any) => {
       //return console.log('texto', item)
       return (
        <>
        <div>
            <label>Nome do filme:</label>
            {item.label}
            <label>Ano do lançamento:</label>
            {item.year}
        </div>
        </>
       )
    }
    
}

