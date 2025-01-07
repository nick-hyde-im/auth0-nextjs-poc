import React from 'react';

const Table = ({ data }) => {
  return (
      <table className="table-auto w-full text-left border-collapse border border-gray-200">
        <tbody>
          {data.map((info, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border border-gray-200 p-2 font-bold">{info.label}</td>
              <td className="border border-gray-200 p-2 break-word break-all whitespace-normal">{info.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default Table;