import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../slice/userSlice';

const ShowTable = () => {
    // const [user, setUser]= useState([]);
     const users = useSelector((state)=> state.users.users)
     console.log('users',users)
    const dispatch = useDispatch();
    const ApiData= "https://ca32068d639b2bb73e28.free.beeceptor.com/"

    const featchUser = async()=>{
        const res = await fetch(ApiData);
        const data= await res.json();
        console.log(data);
        // setUser(data);
        dispatch(addUser(data))
        
    }
    useEffect(()=>{
        featchUser();
    },[])

    return (
        <div>
            <button>Add User</button>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td><button>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowTable
