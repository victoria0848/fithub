import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContextProvider";
import { SignUpBtn } from "../components/SignUpBtn/SignUpBtn"; 
import style from "./WorkoutDetailPage.module.scss";

export function WorkoutDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { authToken } = useContext(AuthContext);
    const [bookingStatus, setBookingStatus] = useState("");

    const { data: workout, isLoading, error } = useFetch(
            "http://localhost:3000/api/teams/" + id
        );


    const getImageUrl = (imageObj) => {
    const path = imageObj?.url || imageObj;
    if (!path || typeof path !== "string") return 'https://placeholder.com';
    
    // Vi har fjernet .replace(), fordi API'et allerede skriver /images/ nu!
    return `http://localhost:3000${path}`;
    };

    const handleSignUp = async () => {
        if (!authToken) {
            alert("Du skal være logget ind for at tilmelde dig et hold.");
            navigate("/login");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                },
                body: JSON.stringify({ teamId: parseInt(id) })
            });

            if (res.ok) {
                setBookingStatus("Tilmeldt! Se dit skema under My Schedule.");
            } else {
                setBookingStatus("Du er allerede tilmeldt dette hold!");
            }
        } catch (err) {
            console.error(err);
        }
    };

    if (isLoading) return <div className={style.loading}>Henter detaljer... </div>;
    if (error) return <div className={style.error}>Fejl ved hentning af hold.</div>;

    return (
        <main className={style.detailWrapper}>
            {workout && (
                <article className={style.detailContent}>
                    
                    {/* SEMANTISK: En header til dit store herobillede og titel */}
                    <header className={style.heroSection}>
                     <img 
  src={getImageUrl(workout.image?.url || workout.image)} 
  alt={workout.name} 
  className={style.heroImage} 
/>
                     <div className={style.heroOverlay}>
                            <div className={style.titleAndButton}>
                                <h1>{workout.name}</h1>
                                <SignUpBtn onClick={handleSignUp} text="Sign up" />
                            </div>
                        </div>
                    </header>

                    {bookingStatus && <p className={style.bookingAlert}>{bookingStatus}</p>}

                    <section className={style.infoSection}>
                        <h3>Schedule</h3>
                        <div className={style.scheduleRow}>
                            <span className={style.day}>{workout.day}</span>
                            <span className={style.time}>{workout.time}</span>
                        </div>
                        <p className={style.descriptionText}>{workout.description}</p>
                    </section>

                    <section className={style.trainerSection}>
                        <h3>Trainer</h3>
                        <div className={style.trainerCard}>
                            <figure className={style.avatarWrapper}>
                                {/* FIKSET: Fjernet ekstern tekst inde i src, og tilføjet .url til træner-billedet */}
                                <img 
  src={getImageUrl(workout.user?.image?.url || workout.user?.image)} 
  alt={workout.user?.name} 
/>

                            </figure>
                            <div className={style.trainerInfo}>
                                <h4>{workout.user?.name}</h4>
                                <p>{workout.user?.description || "Erfaren FitHub instruktør, der glæder sig til at træne dig."}</p>
                            </div>
                        </div>
                    </section>

                </article>
            )}
        </main>
    );
}