import React from 'react'
import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { User, UsersList } from '../interfaces/reqRes';

export const Usuarios = () => {
    const [user, setUser] = useState<User[]>([]);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        try {
            const resp = await reqResApi.get<UsersList>('/users?page=2')
            console.log(resp.data.data);
            setUser(resp.data.data)
        } catch (error) { }
    }
    const renderItem = ({ id, avatar, first_name, last_name, email }: User) => {
        return (
            <tr key={id.toString()}>
                <td><img src={avatar} alt={avatar} width={40}
                    style={{ borderRadius: '30px' }} /></td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div>
            <h3>
                Usuarios
            </h3>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Nombre</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(renderItem)}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
