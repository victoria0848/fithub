import { GridContainer } from "../components/GridContainer/GridContainer";
import { useFetch } from "..hooks/useFetch";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactImage } from "../components/ContactImage/ContactImage";

export function ContactPage() { 
const {
    data: staffData,
    isLoading,
    error,
} = useFetch('${import.meta.env.VITE_PUBLIB_BASE_URL}/api/staff');

return (
    <>
    <GridContainer styleProps={{ gridTemplateColumns: "repeat(2, 1fr)"}}>
    <ContactForm staffData={staffdata} />
    <ContactImage />
    </GridContainer>
    </>
);
}