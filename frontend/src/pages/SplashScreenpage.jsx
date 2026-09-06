import React from 'react';
import style from './SplashScreen.module.scss';

export function SplashScreen({ onStart }) {
    const topImage = "http://localhost:3000/images/cover1.jpg";
    const bottomImage = "http://localhost:3000/images/cover2.jpg";

    return (
        <article className={style.splashWrapper}>
            <header className={style.splashHeader}>
                <h1>Fit<span>Hub</span></h1>
            </header>

            <div className={style.imageContainer}>
                <figure className={style.skewLeft}>
                    <img src={topImage} alt="Fitness Træning" />
                </figure>
                <figure className={style.skewRight}>
                    <img src={bottomImage} alt="Styrketræning" />
                </figure>
            </div>

            <footer className={style.actionArea}>
                <button onClick={onStart} className={style.startBtn}>
                    Train like a pro
                </button>
            </footer>
        </article>
    );
}