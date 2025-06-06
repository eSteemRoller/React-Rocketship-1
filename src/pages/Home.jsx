
import React, { useEffect, useState } from "react";
import axios from 'axios';
import User from "../components/User.jsx"
import { Link } from "react-router";

function Home() {

    const [users, setUsers] = useState([])

    async function fetchUsers() {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
    }

    useEffect(() => {

        fetchUsers();
    }, []);

    // const pixels = "2px";

    return (
        <div>
            {users.map((user) => (
                <Link to={`/users/${user.id}`} key={user.id}>
                    <User 
                        key={user.id}
                        id={user.id} 
                        name={user.name} 
                        email={user.email} 
                        username={user.username}
                    />
                </Link>
            ))}
        </div>
    );
}

export default Home;
