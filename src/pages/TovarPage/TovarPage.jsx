import Tovar from '/public/Catalog/tovarImg.png'
import { useParams } from "react-router-dom"
import { catalog } from "../../data";

export default function TovarPage(){
    const {id} = useParams();
    const product = catalog.find(product => product.id === parseInt(id))
    return(
        <div className="tovar_page">
            <div className="container">
                <div className="path">
                    <p className="path_name">Главная</p>
                    <p className="path_name">\</p>
                    <p className="path_name">Рубашка СВЭГ</p>
                </div>

                <div className="tovar-content">
                    <div className="tovarImg">
                        <img src={Tovar} alt="" className="tovarPhoto" />
                    </div>
                    <div className="text_tovar">
                        <p className="name_tovar">{product.name}</p><br />
                        <p className="price">{product.price} ₽</p><br />
                        <a href="" className="btn-banner">Добавить в корзину</a><br /><br /><br />
                        <p className="descr">
                            В большинстве случаев мужчины для деловой и повседневной жизни выбирают рубашки спокойных оттенков
                            и носят их по всем классическим правилам, где рубашка гораздо светлее пиджака и брюк. При таком подходе выбор цвета сорочки 
                            останавливается на белом, цвета шампань или голубом.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}