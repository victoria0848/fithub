import React from 'react';
import { NavLink } from "react-router-dom";
import style from './WorkoutCard.module.scss';

export function WorkoutCard({ id, title, price, image, description }) {
    return (
        <NavLink to={`/workout/${id}`} className={style.cardLink}>
            <article className={style.workoutCard}>
                
                <figure className={style.imageFrame}>
                    <img src={image || 'https://placeholder.com'} alt={title} />
                </figure>

                <section className={style.cardBody}>
                    <h3>{title}</h3>
                    <p className={style.scheduleMeta}>{price}</p>
                    <p className={style.participants}>{description}</p>
                </section>

                <span className={style.arrow}>❯</span>
                
            </article>
        </NavLink>
    );
}