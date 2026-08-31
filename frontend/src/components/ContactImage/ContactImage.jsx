import MapImage from "./assets/map.png";
import style from "./ContactImage.module.scss";

export function ContactImage () {
    return (
        <section className={StylePropertyMap.contactForm}>
            <figure>
                <img src="{MapImage}" alt="adresse-kort" />
            </figure>
        </section>
    );
}