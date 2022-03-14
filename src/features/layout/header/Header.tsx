import React, {FC} from "react";
import styles from "./header.module.scss";

export const Header: FC = () => {
    return <div className={styles.header}>
        <div className={styles.logo}>
            <h1>🥒 Rick & Morty 🥒</h1>
        </div>
    </div>
}
