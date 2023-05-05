import React from "react";
import "./AchievementBox.scss";
import talentIcon from "../../assets/icons/Talent icon.png";
import timeIcon from '../../assets/icons/Time Assesment icon.png';
import reportIcon from '../../assets/icons/Reporting and analytics icon.png';
import compIcon from '../../assets/icons/Compliance icon.png';

const AchievementBox = () => {
  return (
    <article className="achieve">

      <h1>Achievements this month:</h1>

      <div className="achieve__card">
      <div className="achieve__image-box">
        <img src={talentIcon} alt="talent" className="achieve__image"></img>
      </div>
      <div className="achieve__text-box">
        <p acheive__text>You participated in 2 company's events</p>
      </div>
      </div>

      <div className="achieve__card">
      <div className="achieve__image-box">
        <img src={timeIcon} alt="talent" className="achieve__image"></img>
      </div>
      <div className="achieve__text-box">
        <p acheive__text>You participated in 2 company's events</p>
      </div>
      </div>

      <div className="achieve__card">
      <div className="achieve__image-box">
        <img src={reportIcon} alt="talent" className="achieve__image"></img>
      </div>
      <div className="achieve__text-box">
        <p acheive__text>You participated in 2 company's events</p>
      </div>
      </div>

      <div className="achieve__card">
      <div className="achieve__image-box">
        <img src={compIcon} alt="talent" className="achieve__image"></img>
      </div>
      <div className="achieve__text-box">
        <p acheive__text>You participated in 2 company's events</p>
      </div>
      </div>

      <div className="achieve__card">
      <div className="achieve__image-box">
        <img src={talentIcon} alt="talent" className="achieve__image"></img>
      </div>
      <div className="achieve__text-box">
        <p acheive__text>You participated in 2 company's events</p>
      </div>
      </div>
    </article>
  );
};

export default AchievementBox;
