import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function Data({ }) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log("calling API *******");
        axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setError('Error fetching data');
        console.error(error);
      });

    }, []);
    
    return (
        <div>
            <h2>User List</h2>
            {error && <p>{error}</p>}
            <ul>
                {users.map(user => (
                <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}