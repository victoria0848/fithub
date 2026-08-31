import style from './HeaderImage.module.scss'

export fuction HeaderImage({ImageURL}) {

    return (
        <img className={style.headerImagestyle}
         src= {"http:localhost:3000/assets/" + imageURL} 
        />
    )
}