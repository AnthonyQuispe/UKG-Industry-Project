import React from "react";
import Guy from "../../Assets/guy.jpeg";
import "./Dashboard.scss";
// import Navbar from '../../components/Navbar/Navbar'
// import './Navbar.scss'

const Dashboard = () => {
  return (
    <section className="dash">
      {/* <Navbar /> */}
      <div>
        <img src={Guy} alt="headshot" />
        <h1>Hello Karim!</h1>
        <p>Today is you 567th day at Pandora inc.</p>
      </div>
    </section>
  );
};

export default Dashboard;
