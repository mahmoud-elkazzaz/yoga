/* eslint-disable react/prop-types */
// import { Container, Card, Button } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-router-dom";
import loveIcon from "./../assets/love.svg";
import lovedIcon from "./../assets/favourite.svg";
import learnIcon from "./../assets/learn.svg";
import "../styles/pose.scss";
import { useState } from "react";
const Pose = ({ englishName, img, id }) => {
  const [isLoved, setLoved] = useState(false);
  const alertId = () => {
    alert(id);
  };
  const likeId = () => {
    alert(`Pose with id ${id} is liked`);
  };
  return (
    <div onClick={alertId} className="pose">
      <div className="pose__container">
        <div className="pose__name">{englishName}</div>
        <img className="pose__img" src={img} alt={englishName} />
        <div className="pose__icons__container">
          <div className="pose__icons">
            <div className="pose__icons__icon" onClick={likeId}>
              <img src={loveIcon} />
            </div>
            <div className="pose__icons__text">love</div>
          </div>
          <div className="pose__icons">
            <div className="pose__icons__icon">
              <img src={learnIcon} />
            </div>
            <div className="pose__icons__text">Learn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pose;
