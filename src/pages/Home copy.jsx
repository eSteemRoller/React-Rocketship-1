
import React, { useEffect, useState } from "react";
import axios from 'axios';

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

    return (
        <div>
            {users.length > 0
                ? <h1>{users[0]?.name}</h1>
                : <h1>Loading...</h1>
            }
            {/* Above originally was: <h1>{users.length > 0 ? users[0].name : null}</h1>; */}
            {/* Can be shortened to: {users.length > 0 && users[0].name}; */}
            {/* Can be shortened further to: {users[0]?.name}; */}

        </div>
    );
}
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

    return (
        <div>
            {users.length > 0
                ? <h1>{users[0]?.name}</h1>
                : <h1>Loading...</h1>
            }
            {/* Above originally was: <h1>{users.length > 0 ? users[0].name : null}</h1>; */}
            {/* Can be shortened to: {users.length > 0 && users[0].name}; */}
            {/* Can be shortened further to: {users[0]?.name}; */}

        </div>
    );
}

export default Home;
