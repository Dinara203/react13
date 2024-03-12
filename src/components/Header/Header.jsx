import './Header.css'
import Logo from '/public/Header/logo.svg'
import SearchIcon from '/public/Header/search.svg'
import BasketIcon from '/public/Header/basket.svg'
import FavoriteIcon from '/public/Header/favorite.svg'
import {Link} from 'react-router-dom'


export default function Header(){
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
                                    <Link to="/users" className="header__nav-link">ПОЛЬЗОВАТЕЛИ</Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link to="/add" className="header__nav-link">ДОБАВИТЬ</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header__buttons">
                        <a href="" className="header__buttons-link">
                            <img src={SearchIcon} alt="" className="header__buttons-img" />
                        </a>
                        <a href="" className="header__buttons-link">
                            <img src={BasketIcon} alt="" className="header__buttons-img" />
                        </a>
                        <a href="" className="header__buttons-link">
                            <img src={FavoriteIcon} alt="" className="header__buttons-img" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}