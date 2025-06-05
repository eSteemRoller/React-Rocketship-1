
import { useParams } from "react-router";
import React, {useEffect} from "react";

function Users() {
    const {username} = useParams(); //const name must match dynamic route name here
    useEffect(() => {
        // fetch(`https://api.instagram.com/${username}`) just a guess as an example
    }, [])
    return <h1>{username}</h1>; // same const name here, too
}

export default Users;