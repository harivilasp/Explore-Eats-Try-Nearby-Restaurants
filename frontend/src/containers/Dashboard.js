import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  const restaurants = [
    { id: 1, name: 'Restaurant A' },
    { id: 2, name: 'Restaurant B' },
    { id: 3, name: 'Restaurant C' },
  ];

  const handleApprove = (id) => {
    // handle approve logic for restaurant with id
  };

  const handleReject = (id) => {
    // handle reject logic for restaurant with id
  };

  return (
    <div className="dashboard-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.id}</td>
              <td>{restaurant.name}</td>
              <td>
                <button onClick={() => handleApprove(restaurant.id)}>Approve</button>
                <button onClick={() => handleReject(restaurant.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;