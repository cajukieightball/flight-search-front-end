import { useState, useEffect } from 'react';
import { Routes, Route }      from 'react-router-dom';
import Navbar                 from './components/Navbar';
import Signup                 from './pages/Signup';
import Login                  from './pages/Login';
import Profile                from './pages/Profile';
import FlightDetail           from './pages/FlightDetail';
import Home                   from './pages/Home';
import Results                from './pages/Results';
import './App.css';

const api = import.meta.env.VITE_API_URL;

function App() {
  const [user,    setUser]    = useState(null);
  const [message, setMessage] = useState('');


useEffect(() => {
  fetch(`${api}/api/auth/me`, {
    credentials: 'include'
  })
    .then(res => res.ok ? res.json() : null)
    .then(data => {
      if (data) setUser(data);
    });
}, []);


  const handleLogin = userData => {
    setUser(userData);
    setMessage('Logged in successfully.');
  };

  const handleLogout = async () => {
    await fetch(`${api}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    setUser(null);
    setMessage('Logged out.');
  };

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      {message && <div>{message}</div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login onAuth={handleLogin} setMessage={setMessage} />}
        />
        <Route
          path="/signup"
          element={<Signup setMessage={setMessage} />}
        />
        <Route
          path="/profile"
          element={<Profile user={user} />}
        />
        <Route
          path="/flights/:id"
          element={<FlightDetail />}
        />
        <Route
          path="/results"
          element={<Results />}
        />
      </Routes>
    </>
  );
}

export default App;
