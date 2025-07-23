import { useEffect, useState } from 'react';
const api = import.meta.env.VITE_API_URL;

function Profile({ user }) {
  const [profile, setProfile] = useState(user);

  useEffect(() => {
    if (!profile) {
      fetch(`${api}/api/auth/me`, {
        credentials: 'include' 
      })
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data) setProfile(data);
        });
    }
  }, [profile]);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong>    {profile.email}</p>
      <p>
        <strong>Joined:</strong>{' '}
        {new Date(profile.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}

export default Profile;
