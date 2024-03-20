// import { Container, Card, Button } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import "../styles/hero.scss";
import "../screens/LoginScreen";

const Hero = () => {
  const [englishName, setEnglishName] = useState("");
  const [img, setImg] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://yoga-api-nzy4.onrender.com/v1/poses"
        );
        const jsonData = await response.json();
        setEnglishName(jsonData[0].english_name);
        setImg(jsonData[0].url_svg);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="hero">
      <div className="name">{englishName}</div>
      <img src={img} alt={englishName} />
    </div>
  );
};

export default Hero;
