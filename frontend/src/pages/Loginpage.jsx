import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export fuction LoginPage() {

    const {AuthToken, setAuthToken} = usecontext(Authcontext)


    const login = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const formData = new FormData()
        formData.append('username', username)

        const bodyJSON = JSON.stringlify({ 
            username: username, 
            password: password,
        });

        const res = await fetch("http://localhost:3000/api/auth/login" {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: bodyJSON,
        });

        const data = await res.json();
        setAuthToken(data?.acceessToken)
    };

    return (
        <>
        <h1>Login</h1>
        <p>Indtast dit brugernavn og password</p>
        <form onSubmit={(e) => login(e)}>
        <input
        type="text"
        name="username"
        placeholder="Indtast brugernavn"
        ></input>
        <input
        type="password"
        name="password"
        placeholder="Indtast password"
        ></input>
        <input type="submit" value="Login"></input>
        </form>
        </>
    ) : (
        <>
        <h1>Velkommen {authToken?.user?.name}</h1>
        <p>Du er nu logget ind</p>
        <NavLink to="/">Tryk her for at komme tilbage til forsiden</NavLink>
        </> 
    )}
  </>
 );
}