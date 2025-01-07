import React from 'react';
import Table from '../Table';

const ProfileCard = ({ user }) => {
  const userInfo = [
    { label: 'Name', value: user.name },
    { label: 'Email', value: user.email },
    { label: 'User ID', value: user.sub },
    { label: 'Session ID', value: user.sid },
    { label: 'Custom Property', value: user.customProperty },
    { label: 'Fabric User ID', value: user['fabric-user-id'] },
  ];

  return (
    <div className="p-4 rounded-lg shadow-lg">
      <div className="text-2xl font-bold mb-4">
        User Profile
      </div>
      <Table data={userInfo} />
    </div>
  );
}

export default ProfileCard;