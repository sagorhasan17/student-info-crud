import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

const SubmitHandler = async e => {
  e.preventDefault();

  try {
    const res = await axios.post(
      'http://localhost:8000/api/users/create-user',
      {
        name,
        email,
        age: Number(age),
      }
    );

    console.log('Success:', res.data);

    // optional: reset form
    setName('');
    setEmail('');
    setAge('');
  } catch (err) {
    console.log('Error:', err.response?.data || err.message);
  }
};


  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
          <h2 className="bg-green-500 text-amber-50 p-2 rounded-sm text-2xl font-semibold text-center mb-6">
            Add New User
          </h2>

          <form className="space-y-4" onSubmit={SubmitHandler}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-400"
                onChange={e => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-400"
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Age
              </label>
              <input
                type="number"
                placeholder="Enter age"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-400"
                onChange={e => setAge(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-white py-2 rounded-lg font-medium transition cursor-pointer"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
