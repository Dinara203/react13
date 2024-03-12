import './Card.css'
import CartIcon from '/public/Catalog/add_cart.svg'
import Button from '../Button/Button'
import Tovar from '/public/Catalog/tovarImg.png'
import '../../data.js'
import {Link} from 'react-router-dom'
import { catalog } from '../../data.js'
import { useState } from 'react'
import Modal from 'react-modal';
import Modalka from '../Modalka/Modalka'

export default function Card ({name,price,id,ost}){
    const product = catalog.find(product => product.id === parseInt(id))

    const[modalIsOpen, setModalIsOpen] = useState(false)

    function showModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }
    return(
        <div className="catalog-item">
            <div className="catalog_image">
                <img src={ Tovar } alt="" className="photo" />
            </div>
            <div className="catalog_descr">
                <p className="name_tovar">{name}</p><br></br>
                <p className="count">Осталось {ost} шт</p>
                <div className="wrapper_btns">
                    <p className="price">{price} ₽</p>
                    
                    {product.count == 0 ?
                        <>
                        <button onClick={showModal}>
                            <Button title="Заказать"/>
                        </button>
                        <Modal className="modal-okno" isOpen={modalIsOpen}>
                            <div>
                                <Modalka  setModalIsOpen={setModalIsOpen} />
                                <button className="close-btn" onClick={closeModal}>
                                    <Button title="Закрыть"/>
                                </button>
                            </div>
                        </Modal>
                        </>
                        :
                        <div className="like_cart_icon">
                            <Link to={`${id}`} className="like-link">
                                <img src={ CartIcon } alt="" className="like_icon" />
                            </Link>
                        </div>
                    }
                    
                    
                </div>
            </div>
        </div>
    )
}