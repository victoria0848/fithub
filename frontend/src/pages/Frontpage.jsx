import React from "react"; 
import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";

import { EstateCard as WorkoutCard } from "../components/ProductCard/ProductCard"; 
import style from "./Frontpage.module.scss";


export function Frontpage() {

    //Fetch estate data
    const { 
        data: teamData, 
        error: teamError, 
        isLoading: teamLoading 
    } = useFetch(
        import.meta.env.VITE_PUBLIC_BASE_URL + '/api/teams');

    const {
     data: reviewData,
     error: reviewError, 
     isLoading: reviewLoading
    } = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/reviews");

    const {
        data: staffData,
        isLoading: staffloading,
        error: staffError,
    } = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/users");

    const shuffleArray = () => {
        if (!teamData || !Array.isArray(teamData)) return [];
        const shuffleData = [...teamData].sort(() => Math.random() - 0.5);
        return shuffleData;
    };if (teamLoading || reviewLoading || staffLoading) return <div className={style.loading}>Indlæser FitHub... </div>;

    // Sektion 1: Popular Activities (De første 3 blandede hold)
    const popularWorkouts = shuffleArray().slice(0, 3);

    return (
        <div className={style.frontpageWrapper}>
            {/* VELKOMMEN OVERSKRIFT (MOBIL APP LOOK) */}
            <header className={style.welcomeHeader}>
                <h2>Hej!</h2>
                <p>Klar til at træne i dag?</p>
            </header>

            {/* SEKTION 1: POPULAR ACTIVITIES */}
            <section className={style.sectionArea}>
                <h3>Popular Activities</h3>
                <div className={style.popularSlider}>
                    {popularWorkouts.map((item) => (
                        <NavLink to={`/workout/${item.id}`} key={item.id} className={style.popularCard}>
                            <img src={item.image?.url || 'https://placeholder.com'} alt={item.name} />
                            <div className={style.cardOverlay}>
                                <h4>{item.name}</h4>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </section>

            {/* SEKTION 2: ALLE HOLD (GENBRUGER DIT OPRINDELIGE KORT LOOP) */}
            <section className={style.sectionArea}>
                <h3>Alle hold</h3>
                <div className={style.workoutGrid}>
                    {teamData?.map((item) => (
                        <WorkoutCard 
                            key={item.id} 
                            id={item.id}
                            title={item.name} // Mapper 'name' over i dit korts 'title' prop
                            price={`${item.day} kl. ${item.time}`} // Vi genbruger price-feltet til ugedag/tid
                            image={item.image?.url} // Sender URL'en direkte videre
                            description={`Maks ${item.maxParticipants} deltagere`} // Genbruger beskrivelsen
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}