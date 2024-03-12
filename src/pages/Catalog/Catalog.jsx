import './Catalog.css'
import Catalog from '../../components/Catalog/Catalog'

export default function CatalogPage() {
    return(
        <div className="catalog">
            <div className="container">
                <div className="path">
                    <p className="path_name">Главная</p>
                    <p className="path_name">\</p>
                    <p className="path_name">Каталог</p>
                </div>

                <div className="categories_wrapper">
                    <a href="" className="category">Все</a>
                    <a href="" className="category">Топ</a>
                    <a href="" className="category">Низ</a>
                    <a href="" className="category">Обувь</a>
                </div>

                <Catalog/>

            </div>
        </div>
    )
}