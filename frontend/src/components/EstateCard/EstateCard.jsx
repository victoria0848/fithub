import { NavLink } from "react-router"
import style from './EstateCard.module.scss';

export function EstateCard ({ 
    adress,
    city, 
    energyLabel, 
    estateImages,
    numRooms,
    floorspace, 
    price, 
    id,
    type,
}) {
    function getVillaImage(imageArray) {

        const villaImage = imageArray.filter((item) =>
          item.image.decription.includes("Villa"),
    );
    if (villaImage.length > 0)  return  villaImage;
    else return [imageArray[0]];
    }

    const villa = getVillaImage(estateImages);

    return (
        <NavLink to=('/eastates/${id}')>
        <div className={style.estateCard}>
            <figure>
                <img src={villa[0]?.image.filename}></img>
            </figure>
            <section>
                <span>
                    <h5>{adress}</h5> <p>{energyLabel.name}</p>
                </span>
                <p>{'${city.name} ${city.zipCode}'}</p>
                <p>{type.name}</p>
                <p>{'${numRooms}, ${floorSpace}'}</p>
            </section>
            <h4>{price}DKK</h4>
        </div>
        <NavLink/>
    );
}