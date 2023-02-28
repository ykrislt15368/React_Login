import React, { useEffect, useState } from "react"

const HomePage = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://localhost:8000/v1/api/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
       (
        <ul>
          { users.map((user) => {
          return  ( <li key={users.id}> user.username</li>)}
          )
          })
            </ul>

    </div>
  )
}

export default HomePage