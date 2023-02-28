import { useState, useEffect } from 'react';

const Test = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/v1/api/users')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="App">
        <table class="bp4-html-table .modifier">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>UserName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.Id}>
                <td>{user.Id}</td>
                <td>{user.Title}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>       
    );
};

export default Test;