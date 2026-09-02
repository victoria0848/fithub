import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import style from "./MySchedulepage.module.scss";

export function MySchedulePage() {
    const { authToken } = useContext(AuthContext);
    const [scheduleData, setScheduleData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Sikkerhed: Hvis brugeren ikke er logget ind, sendes de til loginsiden
    useEffect(() => {
        if (!authToken) {
            navigate("/login");
        }
    }, [authToken, navigate]);

    // Henter brugerens profil og tilmeld
    useEffect(() => {
        if (authToken) {
            fetch("http://localhost:3000/api/users", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${authToken}`
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setScheduleData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fejl ved hentning af skema:", err);
                setLoading(false);
            });
        }
    }, [authToken]);

    if (loading) return <div className={style.loading}>Henter dit træningsskema... </div>;

    return (
        <main className={style.scheduleWrapper}>
            <header className={style.scheduleHeader}>
                <button onClick={() => navigate(-1)} className={style.backBtn}>❮</button>
                <h2>My Schedule</h2>
                <div className={style.menuIcon}>
                    <span></span>
                    <span></span>
                </div>
            </header>

            {/* LISTE OVER TILMEDTE HOLD */}
            <section className={style.listSection}>
                {scheduleData?.bookings && scheduleData.bookings.length > 0 ? (
                    scheduleData.bookings.map((booking) => (
                        <article key={booking.id} className={style.scheduleItem}>
                            <div className={style.metaRow}>
                                <span className={style.day}>{booking.team?.day}</span>
                                <span className={style.time}>{booking.team?.time}</span>
                            </div>
                            <h3 className={style.className}>{booking.team?.name}</h3>
                        </article>
                    ))
                ) : (
                    <p className={style.noBookings}>Du har ikke tilmeldt dig nogen hold endnu. Gå til forsiden eller søg for at finde aktiviteter!</p>
                )}
            </section>
        </main>
    );
}