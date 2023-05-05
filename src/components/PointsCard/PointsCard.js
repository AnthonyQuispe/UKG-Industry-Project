import React from "react";
import "./PointsCard.scss";

const PointsCard = () => {
  return (

    <article className="points">

      <div className="points__headers-container">
        <div className="points__headers">
          <p>Karim Abud</p>
          <p className="points__grey">Financial Analyst</p>
        </div>
        <div className="points__image-box">
          <img className="points__image"></img>
        </div>
      </div>

      <div className="points_bar-box">
        <button className="points__bar">
          <button className="points__bar2"></button>
        </button>
      </div>

      <div className="points__points-mid">
        <p className="points__teal">3,600 Points</p>
        <p className="points__grey">4,000</p>
      </div>

      <div className="points__totals">
        <div className="points__lowleft padding-top">
          <p>3,600</p>
          <p className="grey longer">Totals points</p>
        </div>

        <div className="points__lowmid padding-top">
          <p>245</p>
          <p className="grey longer">Points this month</p>
        </div>

        <div className="points__lowright padding-top">
          <p>23</p>
          <p className="grey longer">Stickers earned</p>
        </div>
      </div>
    </article>
  );
};

export default PointsCard;
