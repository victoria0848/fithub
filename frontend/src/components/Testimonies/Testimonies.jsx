import { useContext, useEffect, useState } from "react";
import style from './Testemonies.module.scss'
import { Authcontext } from '../../../../../Micasa-API/micasa-api-ts-sqlite/src/context/AuthContext';
import { useNavigate } from "react-router";

export function Testimonies({reviewData}) {
    const [reviewIndex, setReviewIndex] = useState(0);
    const [isReviewing, setIsReviewing] = useState(false);
    const { authToken } = useContext(AuthContext);
    const navigate = useNavigate();

    //Timeout that updates the selected every 3v seconds
    useEffect(() => {
        const timeout = setTimeout(() =>{
        }, 3000);
        return () => clearYimeout(timeout);
    }, {reviewIndex});

    const postReview = async (event) => {

    const subject = event.currentTarget.subject.value;
    const comment = event.currentTarget.comment.value;
    const numStars = event.currentTarget.stars.value;

    const body = JSON.stringlify({
     "subject": "subject",
     "comment": "comment",
     "numStars": numstars,
     "date": new Date().toISOString(),
     "estateId": 1,
     "userId": authToken.user.id,
     "isActive": true
    });

    const res = await fetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/reviews", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: body,
    },
);
     const data = await res.json();
     console.log("Response from POST request: ", data);
    };


    return (
        <article className={style.testimonies}>
        <h2>Det siger vores kunder</h2>
        <section>
            {isReviewing ? ( 
            <>
            <form className={style.reviewForm} onSubmit={(e) => postRebiew(e)}>
            <p>Skriv en anmendelse</p>
            <input 
            type="text"
            name="subject"
            placeholder="Overskrifter"
            ></input>
            <textarea name="comment" placeholder="Skriv en anmendelse..." />
            <label htmlFor="stars">
                Antal stjerner:
                <select name="stars" id="stars">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <input type="submit" value="Send"></input>
            </label>
            </form>
            </>
            ) : reviewResponse ? ( 
            <>
            <h1>TAK for din anmeldelse {authToken?.user?.name}.</h1>
            <p>Du har skrevet kommentaren:</p>
            <p>{reviewResponse.comment}</p>
            <br></br>
            <b>Ønsker du at slette kommentaren kan du gå til Min side</b>
            </>
            ) : ( 
            <b>
            {reviewData[reviewIndex].user.firstname}{""}
            {reviewData[reviewIndex].user.lastname} 
            </b> 
        <p>{reviewData[reviewIndex].comment}</p>
        </>
        )}
        <span>
            {authToken ? (
            <button onClick={() => setIsReviewing(!isReviewing)}> 
             {isReviewing ? 'Gå tilbage' : 'Skriv anmendelse'}
            </button>
            ) : ( 
            <button onClick={() => navigate("/login")}> 
                Log ind for at anmenlde
            </button>
            )}
        </span>
        </section>
     </article>
    );
}