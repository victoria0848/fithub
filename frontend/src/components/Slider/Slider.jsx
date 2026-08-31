import sliderImage1 from "../../../assets/sliderImages/apartment-1.jpg";
import sliderImage2 from "../../../assets/sliderImages/apartment-2.jpg";
import sliderImage3 from "../../../assets/sliderImages/apartment-3.jpg";
import style from "./Slider.module.css";

export function Slider () {
    const [sliderIndex, setSliderIndex] = useState(0);

    const sliderImages = [sliderImage1, sliderImage2, sliderImage3];

    function forward(){
        if (sliderIndex >= sliderImages.length -1) {
            setSliderIndex(0);
        }
        else setSliderIndex(prev => prev + 1);
    } 
    
    function back(){
        if (sliderIndex=== 0){
            setSliderIndex(sliderImages.length - 1);
        } else setSliderIndex(prev => prev - 1);
    }

    return (
        <figure className={style.sliderStyle}>
            <img src={sliderImages[sliderIndex]} />
            <figcaption>
                <button onClick={() => back()}>Previous</button>
                <button onClick={() => forward()}>Next</button>
            </figcaption>
        </figure>
    )
}
