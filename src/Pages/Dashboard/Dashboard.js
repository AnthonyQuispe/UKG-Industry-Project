import React from "react";
import Guy from "../../assets/Karim Abud.png";
import "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import PointsCard from "../../components/PointsCard/PointsCard";
import AchievementBox from "../../components/AchievementBox/AchievementBox";
import Moods from "../../components/Moods/Moods";

const Dashboard = () => {
  return (
    <section className="dash">
      <Navbar />
      <div className="dash__content">
        <div className="dash__content-container-box">
          <img src={Guy} alt="headshot" className="dash__image" />
        </div>
        <div className="dash__content-container">
          <h1 className="dash__header">Hello Karim!</h1>
          <h4 className="dash__text">Today is you 567th day at Pandora inc.</h4>
        </div>
        <div className="dash__container-moods">
          <div className="dash__moods">
            <Moods />
          </div>
          <div className="dash__cards-container">
            <PointsCard />
            <AchievementBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
