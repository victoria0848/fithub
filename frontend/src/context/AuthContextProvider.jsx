import {  useState } from "react";
import { AuthContext } from "./AuthContext"
import { useCookies } from "react-cookie";

export const AuthcontextProvider = ({cildren}) => {
    const [authToken, setAuthToken] = useState();
    const [cookies, setCookies, removeCookies] = useCookies();

    const now = new Date().getTime();
    const twoHoursFromNow = now + 2 * 60 * 60 * 1000;
    const expireTime = new Date(twoHoursFromNow);

    useEffect(() => {
        if (authToken) {
            setCookies("authToken", authToken?.accessToken, {expires: expireTime });
        }
        console.log("Auth token: ", authToken);
    }, [authToken, setCoookies]);

    if (!authToken) {
        setAuthToken(cookies?.authToken);
        console.log("cookies:", cookies?.authToken);
    }

    function logout() {
        setAuthToken();
        removeCookies("authToken");
    }

    return (
        <AuthcontextProvider value={authToken, setAuthToken, logout}>
            {children}
        </AuthcontextProvider>
    );
};