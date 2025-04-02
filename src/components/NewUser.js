import React, { useState } from "react";

function NewUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email && user.gender && user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      setMessage("User Registered Successfully!");
      setUser({ name: "", email: "", gender: "", password: "" });
    } else {
      setMessage("Please fill all fields.");
    }
  };

  return (
    <div>
      <h2>New User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <select name="gender" value={user.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>{" "}
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Already registered? <a href="/login">Login Here</a>
      </p>
    </div>
  );
}

export default NewUser;
