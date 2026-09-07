import React from "react"; 
import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
import { WorkoutCard } from "../components/WorkoutCard/WorkoutCard"; 
import style from "./Frontpage.module.scss";

export function Frontpage() {
    const { 
        data: teamData, 
        error: teamError, 
        isLoading: teamLoading 
    } = useFetch('http://localhost:3000/api/teams');

    if (teamLoading) return <div className={style.loading}>Indlæser FitHub... </div>;
    if (teamError) return <div className={style.error}>Kunne ikke hente data.</div>;

    const getImageUrl = (imageObj) => {
        const path = imageObj?.url || imageObj; 
        if (!path || typeof path !== "string") return 'https://placeholder.com';
        
        const cleanPath = path.replace('/assets/', '/images/');
        return `http://localhost:3000${cleanPath}`;
    };

    const topWorkout = teamData && teamData.length > 0 ? teamData[0] : null;

    return (
        <div className={style.frontpageWrapper}>
            
            {/* SEKTION 1: POPULAR CLASSES */}
            {topWorkout && (
                <section className={style.sectionArea}>
                    <h3 className={style.sectionTitle}>Popular Classes</h3>
                    <NavLink to={`/workout/${topWorkout.id}`} className={style.staticPopularCard}>
                        {/* Vi sender hele image-objektet med ind i den nye sikrede funktion */}
                        <img src={getImageUrl(topWorkout.image)} alt={topWorkout.name} />
                        <div className={style.cardOverlay}>
                            <h4>{topWorkout.name}</h4>
                        </div>
                    </NavLink>
                </section>
            )}

            {/* SEKTION 2: CLASSES FOR YOU */}
            <section className={style.sectionArea}>
                <h3 className={style.sectionTitle}>Classes for you</h3>
                <div className={style.sliderContainer}>
                    <div className={style.classesForYouSlider}>
                        {teamData?.map((item) => (
                            <WorkoutCard 
                                key={item.id} 
                                id={item.id}
                                title={item.name} 
                                price={`${item.day} kl. ${item.time}`} 
                                image={getImageUrl(item.image)}
                                description={`Maks ${item.maxParticipants} deltagere`} 
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
