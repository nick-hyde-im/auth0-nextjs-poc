import React from 'react';

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
      <table className="table-auto w-full text-left border-collapse border border-gray-200">
        <tbody>
          {userInfo.map((info, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border border-gray-200 p-2 font-bold">{info.label}</td>
              <td className="border border-gray-200 p-2">{info.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProfileCard;