import React from 'react';

const UserProfile = () => {
  const user = {
    username: 'Brenda Nakhumicha',
    email: 'brendan@gmail.com',
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-glovo-red">User Profile</h2>
      <p><strong>Name:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default UserProfile; 