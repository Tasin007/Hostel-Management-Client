import  { useState, useEffect } from 'react';

const UserProfile = ({ email }) => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/user/profile/${email}`)
            .then((response) => response.json())
            .then((data) => setProfile(data))
            .catch((error) => console.error('Error:', error));
    }, [email]);

    return (
        <div className="profile-container">
            <img src={profile.photo} alt={profile.name} className="profile-image"/>
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
            <div className="badges">
                {profile.badges?.map((badge, index) => (
                    <span key={index} className="badge">{badge}</span>
                ))}
            </div>
        </div>
    );
};

export default UserProfile;
