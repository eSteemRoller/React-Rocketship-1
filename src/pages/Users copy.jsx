
// https://jsonplaceholder.typicode.com/users/id

import { useParams } from "react-router";
import React, {useEffect} from "react";

function Users() {
    const {id} = useParams(); //const name must match dynamic route name here
    useEffect(() => {
        // fetch(`https://api.instagram.com/${username}`) just an example
    }, [])
    return <h1>{id}</h1>; // same const name here, too
}
function Users() {
    const {id} = useParams(); //const name must match dynamic route name here
    useEffect(() => {
        // fetch(`https://api.instagram.com/${username}`) just an example
    }, [])
    return <h1>{id}</h1>; // same const name here, too
}
function Users() {
    const {id} = useParams(); //const name must match dynamic route name here
    useEffect(() => {
        // fetch(`https://api.instagram.com/${username}`) just an example
    }, [])
    return <h1>{id}</h1>; // same const name here, too
}

export default Users;