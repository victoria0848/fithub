import {NavLink} from "react-router";
import Logo from "../../assets/images/Logo.svg";
import style from "./Navigation.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Navigation() {
    const [searchquery, setSearchQuery] = useState("");
    const [authToken, logout] = useContext(AuthContext)
    return (
        <nav style={style.navStyle}>
            <figure>
                <img src={Logo} alt="micasa_logo" />
            </figure>
            <ul>
                <li>
                <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                <NavLink to={"/estate"}>Boliger</NavLink>
                </li>
                <li>
                <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                {authToken ?
                <button onClick={logout}>Logout</button>
                ) : ( 
                <NavLink
                className={({ isActive }) => (isActive ? style.active : "")}
                to={"/login"}
                >
                    Login
                </NavLink>
        )}
                </li>
                <input 
                type="search" 
                placeholder="Søg..." 
                />
                <button>Søg</button>
            </ul>



        </nav>
    )
}