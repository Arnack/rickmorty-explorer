import React, {FC, useEffect, useState} from "react";
import styles from "./ChapterInfo.module.scss"
import {Loader} from "../../../loader/Loader";
import axios from "axios";
import {IEpisode} from "../../../../model/episode/episode";

interface IProps {
    urls: string[];
}

/**
 * Component to display chapter list
 * @param urls - array of URLs
 */
export const ChapterInfo: FC<IProps> = ({ urls}) => {
    // getting episode ids as a string
    // ex 1,2,18
    const ids = urls.map((url) => url.split('/')[5]).join(',');

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<IEpisode[]>([]);

    const fetchData = (ids: string) => {
        setIsLoading(true);
        axios.get(`https://rickandmortyapi.com/api/episode/${ids}`)
            .then((res) => {
                setData(res?.data || []);
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        if (ids && ids.length)
            fetchData(ids);
    }, []);

    if (!ids || ids.length === 0) {
        return <tr className={styles.lightRow}>
            <th>Info</th>
            <td>No Data</td>
        </tr>
    }

    if (isLoading || !data) {
        return <tr className={styles.lightRow}>
            <th> Loading...</th>
            <td><Loader size={20}/></td>
        </tr>
    }

    return <>
        {
            data.map((item) => (
                <tr className={styles.lightRow}>
                    <th>{item.episode}</th>
                    <td>{item.name}</td>
                </tr>
            ))
        }
    </>
}