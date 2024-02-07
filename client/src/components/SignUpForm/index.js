import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';


import { ADD_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: ''
  });

  const [signupUser, { loading }] = useMutation(ADD_USER);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signupUser({
        variables: {
          name: formData.name,
          username: formData.username,
          password: formData.password,
          email: formData.email,
        },
      });

      setFormData({
        name: '',
        username: '',
        password: '',
        email: '',
      });

      console.log("Signed up sucessfully:", data);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name here" />
        </div>
        <div className="mb-4">

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input name="username" value={formData.username} onChange={handleChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Choose a Username" />
        </div>
        <div className="mb-6">

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input name="password" value={formData.password} onChange={handleChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        </div>
        <div className="mb-6">

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-Mail
          </label>
          <input name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your preferred E-mail" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={loading}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;