import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import {Loader} from "../loader/Loader";
import {CharacterCart} from "./characterCart/CharacterCart";
import {ICharacter} from "../../model/character/character";
import {Pagination} from "./pagination/Pagination";

export const CharacterList: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [pages, setPages] = useState(1)
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    const fetchData = (page: number) => {
        setLoading(true);
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then((res) => {
                setPages(res.data.info.pages);
                setCharacters(res.data.results);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchData(currentPage)
    }, [currentPage])

    if (isLoading) {
        return <Loader/>
    }

    return <>
        <Pagination page={currentPage}
                    setPage={setCurrentPage}
                    pages={pages}/>
        <div className="row">
            {
                characters.map((char: ICharacter, idx) =>
                    (<CharacterCart name={char.name}
                                    key={char.name + idx + char.species}
                                    species={char.species}
                                    gender={char.gender}
                                    status={char.status}
                                    location={char.location}
                                    origin={char.origin}
                                    episode={char.episode}
                                    image={char.image}/>))
            }
        </div>
        <Pagination page={currentPage}
                    setPage={setCurrentPage}
                    pages={pages}/>
    </>
}