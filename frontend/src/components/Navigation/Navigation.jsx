import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import style from "./Navigation.module.scss";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { authToken, setAuthToken, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const bodyJSON = JSON.stringify({ 
            username: username, 
            password: password,
        });

        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: bodyJSON,
            });

            const data = await res.json();
            
            if (data?.token) { 
                setAuthToken(data.token);
                setIsOpen(false); 
                navigate("/my-schedule");
            } else {
                alert("Forkert brugernavn eller adgangskode!");
            }
        } catch (err) {
            console.error("Login fejl:", err);
        }
    };

    return (
        <>
            {/* TOPBAR*/}
            <header className={style.topBar}>
                <NavLink to="/" className={style.logo} onClick={() => setIsOpen(false)}>
                    Fit<span>Hub</span>
                </NavLink>
                
                {/* Dynamisk burger */}
                <button className={style.triggerBtn} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✕" : "☰"}
                </button>
            </header>

            {/* FULD SKÆRMS MENU OVERLAY*/}
            <nav className={`${style.menuOverlay} ${isOpen ? style.showMenu : ""}`}>
                <div className={style.overlayContent}>
                    
                    {/* Hovedlinks i menuen */}
                    <ul className={style.navLinks}>
                        <li>
                            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/search" onClick={() => setIsOpen(false)}>Search</NavLink>
                        </li>
                        {authToken && (
                            <li>
                                <NavLink to="/my-schedule" onClick={() => setIsOpen(false)}>My Schedule</NavLink>
                            </li>
                        )}
                    </ul>

                    <div className={style.authSection}>
                        {!authToken ? (
                            /* NAVIGATION OVERLAY - REGULAR */
                            <div className={style.loginFormArea}>
                                <h3>Log in</h3>
                                <form onSubmit={handleLogin} className={style.inlineForm}>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        placeholder="Username" 
                                        required 
                                    />
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password" 
                                        required 
                                    />
                                    <button type="submit" className={style.loginBtn}>Login</button>
                                </form>
                            </div>
                        ) : (
                            /* NAVIGATION OVERLAY - LOGGET IN */
                            <div className={style.logoutArea}>
                                <button 
                                    onClick={() => { logout(); setIsOpen(false); navigate("/"); }} 
                                    className={style.logoutLink}
                                >
                                    Log out
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </nav>
        </>
    );
}