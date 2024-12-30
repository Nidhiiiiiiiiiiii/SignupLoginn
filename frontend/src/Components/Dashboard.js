// // src/components/Dashboard.js
// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h2>Hello, you are logged in!</h2>
//       <p>Welcome to your dashboard.</p>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <h1>LayOutLM</h1> */}
      <h2>Hello, you are logged in!</h2>
      {/* <p>Welcome</p> */}
      <Link to="/chatbot" className="start-button">Start</Link>
    </div>
  );
};

export default Dashboard;


