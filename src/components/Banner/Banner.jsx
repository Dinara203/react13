import './Banner.css'
import BannerImage from '/public/Banner/banner.png'
import LogoImage from '/public/Header/logo.svg'


export default function Banner (){
    return(
        <div className="banner">
            <img src={BannerImage} />
            <div className="container">
                <div className="banner-content">
                    <img src={LogoImage} alt="" className="logo-banner" />
                    <p className="title-banner">БРЕНД ОДЕЖДЫ</p>
                    <a href="#" className="btn-banner">ПЕРЕЙТИ В КАТЕГОРИИ</a>
                </div>
            </div>
        </div>
    )
}