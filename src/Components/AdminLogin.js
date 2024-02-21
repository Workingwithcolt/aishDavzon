import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

 const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // In a real-world scenario, you would send a request to a server for authentication.
    // For simplicity, we'll just check if the username and password are both 'admin'.
    if (username === 'admin' && password === 'admin') {
      // Successful login, you can redirect or perform other actions here.
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Admin Login Here</h3>

        <label>Username</label>
        <input type="text" placeholder="Email or Phone" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Password</label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Link to='/Manager'><button>Log In</button>
        </Link>
        <div className="social">
          <div className="go">Google</div>
          <div className="fb"> Facebook</div>
        </div>
      </form>
    </>

  );
};
export default AdminLogin; 
