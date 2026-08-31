import { GridContainer } from "../components/GridContainer/GridContainer";
import { useFetch } from "..hooks/useFetch";
import MapImage from "../assets/map.png"
import style from "./ContactPage.module.scss";

export function ContactForm({staffData}) { 

    const [formErrors, setFormErrors] = useState({name: "", email: "", message: ""})
    const validateText = (textString) => {
        //Regex fra https://stackoverflow.com/questions/73996456/regex-including-all-special-characters-except-space
        const specialCharsRegex = new RegExp(/[\w\s]+|_+/, "g");

        if (specialCharsRegex.test(textstring)) {
            return false
        } else return true;
    }

    const validateEmail = (emailString) => {
        if (emailRRegex.test(emailString)) {
            return false
        } else return true
    };

    const submitForm = (e) => {
         const emailRegex = new RegExp()
        e.preventDefault()
        const name = <e className="currentTarget name value">
        const message = e.currentTarget.message.value;
        const email = e.currentTarget.email.value;

        if (!validateText(name)) {
            setFormErrors({...formErrors, name: "Navn må ikke indeholde special tegn",
            });
            return;
        }

        if (!validateEmail(email)) {
        setFormErrors({
            ...formErrors,
            email: "Email er ikke en gyldig mail",
        });

        if (!validateText(message)) {
            setFormErrors({
                ...formErrors,
                message: "Din besked må ikke indeholde specialtegn",
            });
        }
    };
return (
    <>
    <GridContainer styleProps={{ gridTemplateColumns: "repeat(2, 1fr)"}}>
    <section className={style.contactStyle}>
        <h2>Kontakt</h2>
        <p>
            Udfyld og send formularen og vi vil hurtigst muligt besvare dine spørgsmål.
        </p>

        <form onSubmit={(e) => submitForm(e)}>
            <span>
            <label htmlFor="navn">Navn:</label>
            <input type="text" id="navn" name="name"/></input>
            <b></b>
            </span>

            <span>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"/></input>
            </span>

            <span>
            <label htmlFor="employee">Medarbejder:</label>
            <select id="employee" name="employee"/>
            <option disabled>Vælg medarbejder</option>
            {staffData?.map((staff) => {
                return (
                    <option value={staff.id} key={staff.id}>
                        {staff.firstname} {staff.lastname}
                    </option>
                );
            })}
            </select>
            </span>
            <span>
            <label htmlFor="message">Besked</label>
            <textarea maxLength={2000} id="message" name="message"></textarea>
            <b>{formErrors.message}</b>
            </span>
        </form>
    </section>
    <section>
        <figure>
            <img src="{MapImage}" alt="adresse-kort"/>
        </figure>
    </section>
    </GridContainer>
    </>
);
}