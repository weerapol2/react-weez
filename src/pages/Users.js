import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const listUsers = users.map(user => (
    <tr key={user.id}>
      <td className="px-5 py-5 text-sm">{user.id}</td>
      <td className="px-5 py-5 text-sm">{user.name}</td>
      <td className="px-5 py-5 text-sm">{user.email}</td>
      <td className="px-5 py-5 text-sm">{user.username}</td>
      <td className="px-5 py-5 text-sm">{user.address.street}</td>
      <td className="px-5 py-5 text-sm">{user.address.city}</td>
    </tr>
  ));

  return (
    <>
      <h1 className="text-red-300 font-bold">แสดงชื่อผู้ใช้งาน</h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">ID</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Name</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Email</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Username</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Street</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">City</th>
          </tr>
        </thead>
        <tbody>{listUsers}</tbody>
      </table>
    </>
  );
}

export default Users;
