import { useState } from "react";

export default function CreatePage (){
    const[message, setMessage] = useState()

    function createForm(event){
        event.preventDefault()
        const formData = new FormData(event.target)

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: formData
        })
        event.target.reset()
        setMessage('Форма отправлена')
    }
    return(
        <div className="add-content">
            <div className="container">
                <div className="path">
                    <p className="path_name">Главная</p>
                    <p className="path_name">\</p>
                    <p className="path_name">Добавление</p>
                </div>
                <h1 className="title">Добавлние</h1>

                <form onSubmit={createForm}>
                    <label>Название</label>
                    <input type="text" name="title"/><br />
                    <label>Описание</label>
                    <textarea name="body"></textarea><br />
                    <button type="submit" className="btn-banner">Добавить</button>
                    <br /><p className="sms">{message}</p>
                </form>
            </div>
        </div>
    )
}