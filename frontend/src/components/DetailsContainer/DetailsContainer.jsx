import style from "./DetailesContainer.module.scss";

import iconFloorplan from '../../assets/detailsIcons/Icon_Floorplan.svg'
import iconGallery from '../../assets/detailsIcons/Icon_Gallery.svg'
import iconLike from '../../assets/detailsIcons/Icon_Like.svg'
import iconLocation from '../../assets/detailsIcons/Icon_Location.svg'

export function DetailsContainer({
    estateData, 
    setModalIsOpen, 
    setSelectedContent
}) {

    const handleModal = (typeNumber) => {
        setModalIsOpen(true);
        setSelectedContent(typeNumber);
    };

    return (
        <section>
            <div classNaame={style.detailsTop}>
                <div>
                <h2>{estateData.adress}</h2>
                <p>{eastateData.city}</p>
                <p>
                {eastateData.type} {eastateData.floorSpace} {eastateData.numRooms}
                </p>
                <p>Antal visninger: {eastateData.numClicks}</p>
            </div>

            <div>
                <button onClick={() => handleModal(0)}>
                    <img src={iconGallery} alt="gallery" />
                </button>
                <button onClick={() => handleModal(1)}>
                    <img src={iconFloorplan} alt="floorplan" />
                    </button>
                <button onClick={() => handleModal(2)}>
                    <img src={iconLocation} alt="location" />
                </button>
                <button onClick={() => setModalIsOpen(true)}>
                    <img src={iconLike} alt="like" />
                </button>
            </div>

            <div>
                <button onClick={() => setModalIsOpen(true)}>
                    <img src={iconGallery} alt="gallery" />
                </button>
                <button onClick={() => setModalIsOpen(true)}>
                    <img src={iconFloorplan} alt="floorplan" />
                    </button>
                <button onClick={() => setModalIsOpen(true)}>
                    <img src={iconLocation} alt="location" />
                </button>
                <button onClick={() => setModalIsOpen(true)}>
                    <img src={iconLike} alt="like" />
                </button>
            </div>

            <div>
                <p>Kontantpris:</p>
                <h3>{eastateData.price}</h3>
                <p>Udbetaling: {eastateData.payout}</p>
                <p>Ejrudgift pr. måned: {eastateData.gross}</p>
            </div>
        </div>

        <article className={style.detailsMid}>
            <section>{estatedata.description}</section>

            <div>
                <h5>Kontakt</h5>
                <img src={"http://localhost:3000/assets/" + estateData.staff.image}
                 alt={estateData.staff.name + "_image"}
            />
            <p>{estateData.staff.firstname} {estateData.staff.lastname}</p>
            <p>{estateData.staff.position}</p>
            <p>Mobil:{estateData.staff.phone}</p>
            <p>Email:{estateData.staff.email}</p>
            </div>

        </article>
        </section>
    );
}