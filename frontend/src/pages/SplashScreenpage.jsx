import React from 'react';
import style from './SplashScreen.module.scss';

export function SplashScreen({ onStart }) {
    const topImage = "http://localhost:3000/images/cover2.jpg";
    const bottomImage = "http://localhost:3000/images/cover1.jpg";

    return (
        <article className={style.splashWrapper}>
            <div className={style.imageContainer}>
                
                {/* 1. ØVERSTE BILLEDE */}
                <figure className={style.imageFrame}>
                    <img src={topImage} alt="Fitness Træning" />
                    <div className={style.textOverlay}>
                        <h2>Believe<br />Yourself</h2>
                        <div className={style.subLineRow}>
                            <span className={style.line}></span>
                            <p>Train like a pro</p>
                        </div>
                    </div>
                </figure>

                {/* 2. NEDERSTE BILLEDE */}
                <figure className={style.imageFrame}>
                    <img src={bottomImage} alt="Styrketræning" />
                    <div className={style.buttonOverlay}>
                        <button onClick={onStart} className={style.startBtn}>
                            Start training
                        </button>
                    </div>
                </figure>
                
            </div>
        </article>
    );
}