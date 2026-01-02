import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      age: 25,
    },
  ]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[500px] bg-white rounded-2xl shadow-lg p-5">
        <h2 className="text-xl font-semibold text-center mb-4 bg-blue-500 rounded-md text-white py-2 px-1.5">User List</h2>

        <Link to="/create" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer inline-block mb-4">Add User</Link>

        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-amber-400">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Age</th>
              <th className="p-2 border text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id} className="text-center hover:bg-gray-100">
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.age}</td>
                <td className="p-2 border space-x-2">
                  <Link to="/update" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm cursor-pointer">
                    Update
                  </Link>
                  <Link to="/delete" className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm cursor-pointer">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
