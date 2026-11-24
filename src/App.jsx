import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [registered, setRegistered] = useState(false);

  function register(e) {
    e.preventDefault();
    setRegistered(true);
    alert("Registration Successful!");
  }

  function loginUser(e) {
    e.preventDefault();
    if (registered && email && password) {
      setLogin(true);
    } else {
      alert("Please register first!");
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Application</h1>

      {!login ? (
        <>
          <h2>Student Registration</h2>
          <form onSubmit={register}>
            <input placeholder="Name" value={name}
              onChange={e => setName(e.target.value)} required /><br /><br />

            <input placeholder="Email" type="email" value={email}
              onChange={e => setEmail(e.target.value)} required /><br /><br />

            <input placeholder="Password" type="password" value={password}
              onChange={e => setPassword(e.target.value)} required /><br /><br />

            <button type="submit">Register</button>
          </form>

          <h2>Student Login</h2>
          <form onSubmit={loginUser}>
            <input placeholder="Email" type="email" required /><br /><br />
            <input placeholder="Password" type="password" required /><br /><br />
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <>
          <h2>Student Profile</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <button onClick={() => setLogin(false)}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;