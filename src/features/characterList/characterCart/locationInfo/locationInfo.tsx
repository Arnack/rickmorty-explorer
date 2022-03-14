import React, {FC, useEffect, useState} from "react";
import styles from "./locationInfo.module.scss"
import axios from "axios";
import {Loader} from "../../../loader/Loader";
import {ILocation} from "../../../../model/location/location";

interface IProps {
    url?: string
}

/**
 */
export const LocationInfo: FC<IProps> = ({ url}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<ILocation | null>(null)

    const fetchData = (url: string) => {
        setIsLoading(true);
        axios.get(url)
            .then((res) => {
                setData(res?.data)
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        if (url)
            fetchData(url);
    }, []);

    if (!url) {
        return <tr className={styles.lightRow}>
            <th>Info</th>
            <td>No Data</td>
        </tr>
    }
    if (isLoading || !data) {
        return <tr className={styles.lightRow}>
            <th>Loading...</th>
            <td><Loader size={12} /></td>
        </tr>
    }

    return <>
        <tr className={styles.lightRow}>
            <th>Name</th>
            <td>{data.name}</td>
        </tr>
        <tr className={styles.lightRow}>
            <th>Type</th>
            <td>{data.type}</td>
        </tr>
        <tr className={styles.lightRow}>
            <th>Dimension</th>
            <td>{data.dimension}</td>
        </tr>
        <tr className={styles.lightRow}>
            <th>Residents</th>
            <td>{data.residents.length}</td>
        </tr>
    </>
}