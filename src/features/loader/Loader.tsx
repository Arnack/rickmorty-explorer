import React, {FC} from "react";
import styles from "./loader.module.scss"

interface IProps {
    size?: number;
}

export const Loader: FC<IProps> = ({ size = 50 }) => {
    return <div style={{ fontSize: `${size}px` }} className={styles.spinner}>
        🥒
    </div>
}