import { EstateCard } from "../components/EstateCard/EstateCard";
import { FlexContainer } from "../components/FlexContainer/FlexContainer";
import { Slider } from "../components/Slider/Slider";
import { StaffSection } from "../components/StaffSection/StaffSection";
import { Testimonies } from "../components/Testimonies/Testimonies";
import { useFetch } from "../hooks/useFetch";


export function Frontpage() {

    //Fetch estate data
    const { 
        data: estateData, 
        error: eatsteError, 
        isLoading: estateLoading 
    } = useFetch(
        import.meta.env.VITE_PUBLIC_BASE_URL + '/api/estates');

    const {
     data: reviewData,
     error: reviewError, 
     isLoading: reviewLoading
    } = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/reviews");

    const {
        data: staffData,
        isLoading: staffloading,
        error: staffError,
    } = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/staff");

    const shuffleArray() {
    const shuffleData = data?.sort(() => Math.random() - 0.5);
    return shuffleData;
}


    return (
    <>
    <Slider />;
    <FlexContainer 
    styleProps={{
    position: "absolute",
    left: "10%",
    top: "60vh",
    width: "80%",
    zIndex: "2",
    }}
    >
    {shuffleArray()?.map((item, index) => {
        return (
        index < 3 && (
        <EstateCard 
        key={item.id} 
        adress={item.adress} 
        city={item.city}
        id={item.id}
        energyLabel={item.energyLabel}
        estateImages={item.estateImage}
        numRooms={item.numRooms}
        floorSpace={item.floorSpace}
        price={item.price}
        type={item.type}
        />
        )
        );
})}
</FlexContainer>
{staffData && <StaffData={staffData} />}
{reviewData && <Testimonies reviewData={reviewData} />}
</>
);
}