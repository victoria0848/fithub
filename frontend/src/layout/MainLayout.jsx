import { Outlet } from "react-router-dom"; // Rettet til react-router-dom
import { Navigation } from "../components/Navigation/Navigation";

export function MainLayout() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
}