import React, {FC, useState} from "react";
import styles from "./characterCart.module.scss"
import {LocationInfo} from "./locationInfo/locationInfo";
import {ILocation} from "../../../model/location/location";
import {ChapterInfo} from "./chaptersInfo/ChapterInfo";

interface IProps {
    name: string;
    species: string;
    gender: string;
    status: string;
    location: ILocation;
    origin: ILocation;
    image: string;
    episode: string[];
}

export const CharacterCart: FC<IProps> = ({
                                              name,
                                              image,
                                              origin,
                                              location,
                                              species,
                                              status,
                                              gender,
                                              episode
                                          }) => {

    const [displayLocationInfo, setDisplayLocationInfo] = useState(false);
    const [displayOriginInfo, setDisplayOriginInfo] = useState(false);
    const [displayEpisodes, setDisplayEpisodes] = useState(false);


    return <div className="col-sm-12 col-md-6">
        <div className={styles.cart}>
            <div className={styles.cartHeader}>
                <img className={styles.image} src={image} alt={name}/>
                <h3 className={styles.name}>{name}</h3>
            </div>
            <div className={styles.cardBody}>
                <table>
                    <tbody>
                    <tr className={styles.expandable}
                        onClick={() => setDisplayOriginInfo(!displayOriginInfo)}>
                        <th>Origin</th>
                        <td>
                            {origin.name} <a className={styles.expandLnk}>{displayOriginInfo ? 'hide' : 'expand'}</a>
                        </td>
                    </tr>
                    {
                        displayOriginInfo && <LocationInfo url={origin.url}/>
                    }
                    <tr className={styles.expandable}
                        onClick={() => setDisplayLocationInfo(!displayLocationInfo)}>
                        <th>Location</th>
                        <td>
                            {location.name} <a
                            className={styles.expandLnk}>{displayLocationInfo ? 'hide' : 'expand'}</a>
                        </td>
                    </tr>
                    {
                        displayLocationInfo && <LocationInfo url={location.url}/>
                    }
                    <tr>
                        <th>Species</th>
                        <td>{species}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{status}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{gender}</td>
                    </tr>
                    <tr className={styles.expandable}
                        onClick={() => setDisplayEpisodes(!displayEpisodes)}>
                        <th>Chapters</th>
                        <td>
                            {episode.length} <a className={styles.expandLnk}>{displayEpisodes ? 'hide' : 'expand'}</a>
                        </td>
                    </tr>
                    {
                        displayEpisodes && <ChapterInfo urls={episode}/>
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}