import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setUsers(data))
        .catch(error => setError(error));
    }, []);
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  return (
    <div>
    <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList