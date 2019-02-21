import React from 'react';
import styles from './Videogame.module.css';

const videogame = (props) => {
    let secondaryInfo = `${styles.secondaryInfo} ${styles.platform}`;
    let cardStyle = styles.videogameCard;

    if (props.data.status === 'Finished') {
        cardStyle += ` ${styles.cardFinishedBorder}`;
    } else {
        cardStyle += ` ${styles.cardNotFinishedBorder}`;
    }

    return (
        <div className={cardStyle}>
            <p><span>{props.data.title}</span></p>
            <p><span className={secondaryInfo}><i>{props.data.platform}</i></span><span>{props.data.status}</span></p>
        </div>
    );
};

export default videogame;