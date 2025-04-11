import React, {useState, useEffect} from "react";
import axios from 'axios';
import User from './User';

export default function Data() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            console.log("calling API *******");
            try {
                setLoading(true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
                setLoading(false);

                setTimeout(() => {
                    response.data[1].name = "Muhammad Asfund Yar";
                    setUsers(response.data);
                }, 5000);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const changeName = (i) => {
        console.log("Changing name");
        setUsers((users) => {
            // users[2].name = "Muhammad Rayan";
            // return users;

            const buUsers = [...users];
            buUsers[i].name = "Muhammad Rayan";

            // const updatedKeys = { name: "Muhammad Rayan" };
            // buUsers[i] = {
            //     ...buUsers[i],
            //     ...updatedKeys
            // };

            return buUsers;
        });
    }
    
    return (
        <div>
            <h2>User List</h2>

            {error && <p>{error}</p>}

            {loading && <p>Please wait. We are fetching records</p>}
            { !loading &&
                <div>
                    <ul>
                        {
                            users.map(user => (
                                <li key={user.id}>{user.name}</li>
                            ))
                        }
                    </ul>
                    <button className="btn btn-primary btn-sm" onClick={() => changeName(4)}>Change Name</button>

                    <hr />

                    <User />
                </div>
            }
        </div>
    )
}