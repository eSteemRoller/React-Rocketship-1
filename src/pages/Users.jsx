
// https://jsonplaceholder.typicode.com/users/id

import { Link, useParams } from "react-router";
import React, {useEffect, useState} from "react";
import axios from "axios";


function Users() {
    const {id} = useParams(); //const name must match dynamic route name here
    const [user, setUser] = useState({});

    async function fetchUser() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(data);
    }

    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <>
            <p><Link to="/">Go back</Link></p>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.username}</h1>
        </>
    );
}

export default Users;