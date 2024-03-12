import './Footer.css'
import Logo from '/public/Header/logo.svg'
import SearchIcon from '/public/Header/search.svg'
import BasketIcon from '/public/Header/basket.svg'
import FavoriteIcon from '/public/Header/favorite.svg'
import {Link} from 'react-router-dom'

export default function Footer () {
    return(
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="header-logo-nav">
                        <div className="header__logo">
                            <Link to="/" className="header__logo-link">
                                <img src={Logo} alt="" className="logo" />
                            </Link>
                        </div>

                        <nav className="header__nav">
                            <ul className="header__nav-menu">
                                <li className="header__nav-item ">
                                    <Link to="/" className="header__nav-link">ГЛАВНАЯ</Link>
                                </li>
                                <li className="header__nav-item ">
                                    <Link to="/catalog" className="header__nav-link">КАТАЛОГ</Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link to="/information" className="header__nav-link">ИНФОРМАЦИЯ</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="informations">
                        <p className="adress">Г. КАЗАНЬ, УЛ. БАЛИ ГАЛЕЕВА 3А </p>
                        <p className="adress">+7 (927) 482-09-82</p>
                        <p className="adress">KUZMAKOLOM@GMAIL.RU </p>
                    </div>
                </div>
            </div>
        </header>
    )
}