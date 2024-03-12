import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../../../public/Catalog/tovarImg.png'
import './SliderC'

export default function SliderC () {
    const setting ={
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return(
        <div className="slider-content">
            <div className="container">
                <div className="slider_place">
                    <Slider {...setting}>
                        <div className="slide">
                            <img src={img1}  />
                        </div>
                        <div className="slide">
                            <img src={img1}  />
                        </div>
                        <div className="slide">
                            <img src={img1}  />
                        </div>
                        <div className="slide">
                            <img src={img1}  />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}