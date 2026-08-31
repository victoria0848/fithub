import { NavLink } from "react-router";
import style from "./Footer.module.scss"

export function Footer() {
    return (
        <footer className={style.footerStyle}>
            <section>
                <h3>MiCasa</h3>
                <p>Øster Uttrup vej 5</p>
                <p>9000 Aalborg</p>
                <br />
                <p>Email: info@homelands.dk</p>
                <p>Telefon: +45 1122 3344</p>
            </section>

            <section>
                <NavLink to="/">Forside</NavLink>
                <NavLink to="/estate">Boliger</NavLink>
                <NavLink to="/contact">Kontakt</NavLink>
                <NavLink to="/login">Login</NavLink>
            </section>

            <section>
                <h5>Få drømmehuset i din indbakke</h5>
                <p>Tilmeld dig til vores nyhedsbrev og få nye boliger sendt 
                    direkte til din indbakke</p>

                <form>
                    <input type="email" placeholder="Email" />
                    <input type="submit" placeholder="Tilmeld" />
                </form>
            </section>
        </footer>
    )
}