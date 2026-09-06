import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
import style from "./Search.module.scss";

export function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    const { data: workouts } = useFetch("http://localhost:3000/api/teams");
    const { data: trainers } = useFetch("http://localhost:3000/api/users");

    const getImageUrl = (imageParam) => {
        const path = imageParam?.url || imageParam;
        
        if (!path || typeof path !== "string") {
            return 'https://placeholder.com';
        }
        
        return `http://localhost:3000${path}`;
    };

    const filteredWorkouts = workouts?.filter(workout => 
        workout.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    const popularClasses = workouts ? workouts.slice(0, 3) : [];

    return (
        <main className={style.searchWrapper}>
            <header className={style.searchHeader}>
                <h2>Search</h2>
                <div className={style.searchBox}>
                    <span className={style.searchIcon}></span>
                    <input 
                        type="text" 
                        placeholder="Search classes..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            {searchTerm ? (
                <section className={style.resultsSection}>
                    <h3>Søgeresultater ({filteredWorkouts.length})</h3>
                    <div className={style.resultsList}>
                        {filteredWorkouts.map(workout => (
                            <NavLink to={`/workout/${workout.id}`} key={workout.id} className={style.resultItem}>
                                <img src={getImageUrl(workout.image)} alt={workout.name} />
                                <div>
                                    <h4>{workout.name}</h4>
                                    <p>{workout.day} kl. {workout.time}</p>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </section>
            ) : (
                <>
                    {/* SEKTION 1: POPULAR CLASSES */}
                    <section className={style.popularSection}>
                        <h3>Popular classes</h3>
                        <div className={style.classSlider}>
                            {popularClasses.map(workout => (
                                <NavLink to={`/workout/${workout.id}`} key={workout.id} className={style.classCard}>
                                    <figure className={style.imgFrame}>
                                        <img src={getImageUrl(workout.image?.url || workout.image)} alt={workout.name} />
                                    </figure>
                                    <h4>{workout.name}</h4>
                                    <div className={style.barProgress}></div>
                                </NavLink>
                            ))}
                        </div>
                    </section>

                    {/* SEKTION 2: POPULAR TRAINERS */}
                    <section className={style.trainersSection}>
                        <h3>Popular trainers</h3>
                        <div className={style.trainerList}>
                        {trainers?.filter(trainer => trainer.name !== "Admin")
                        .slice(0, 3)
                        .map(trainer => (
                                <article key={trainer.id} className={style.trainerRow}>
                                    <figure className={style.avatar}>
                                        <img src={getImageUrl(trainer.image?.url || trainer.image)} alt={trainer.name} />
                                    </figure>
                                    <div className={style.trainerMeta}>
                                        <h4>{trainer.name}</h4>
                                        <p>{trainer.description || "Erfaren yoga- og fit-instruktør med speciale i flydende bevægelser."}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}