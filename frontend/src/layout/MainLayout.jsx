import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";


export function MainLayout({ children }) {
    return (
        <>
        <Navigation />
        <Outlet />
        <Footer />
        </>
    )
}