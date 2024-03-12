import { useEffect, useState } from "react"

export default function UsersPage () {
    const [users, setUsers] = useState([])

    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
    }
    useEffect(()=>{
        fetchUsers()
    }, [])

    return(
        <div className="users-content">
            <div className="container">
                <div className="path">
                    <p className="path_name">Главная</p>
                    <p className="path_name">\</p>
                    <p className="path_name">Пользователи</p>
                </div>
                <h1 className="title">Пользователи</h1>
                <div className="users-content-wrap">
                    {
                        users.map((user)=>{
                            return(
                                <>
                                <div className="users-item">
                                    <p className="name-users">{user.name}</p>
                                    <p className="email">email: {user.email}</p>
                                </div> <br />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}