import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Modal } from "../components/Modal/Modal";
import { HeaderImage } from "../components/HeaderImage/HeaderImage";
import { DetailsContainer } from "../components/DetailsContainer/DetailsContainer";
import { useState } from "react";
import mapImage from "../assets/map.png";

export function EstateDetailsPage() {
    const { id } = useParams();

    const [modalIsOpen, setModalIdOpen] = usestate(false)
    const [selectedContent, setSelectedcontent] = useState(0)

    const { data, isLoading, error } = useFetch(
    import.meta.env.VITE_PUBLIC_BASE_URL + "api/estates/" + id,
    );

    //Register click code - No API route :( 
    /* useEffect(() => {
    const registerClick = async () => {
        if (data) { 
    const url = 'http:/localhost:300//api/estates/' +id
    const body = {...data, numClicks: data.numClicks +1}
    const res = await fetch(url, {body: body, method: 'PUT'})
    const json = await res.json()
    }
    };

    registerClick()
    }, [data]); */

    if (isLoading){
        return <p>Loading...</p>
    }

    if (error){
        return <p>Error: {error}</p>
    }

    const contentArray = [ 
        'http://localhost:3000/assets/${data?.estateImages[0].image.filename}', 
        'http://localhost:3000/assets/images/${data?.floorplan}', 
        mapImage,
    ];


    return (
        <>
        {data && (
        <>
        <HeaderImage imageURL={data?.estateImages[0].image.filename}  />
        <DetailsContainer 
        estetaData={data} 
        setModalIsOpen={setModalIsOpen} 
        setSelectedContent={setSelectedContent} 
        /> 
        </>
    )}
    {modalIsOpen && ( 
     <Modal setModal={setModalIsOpen}>
        <div><img src={contentArray[selectedContent]} /></div>
    </Modal>
    )}
    </>
    );
}