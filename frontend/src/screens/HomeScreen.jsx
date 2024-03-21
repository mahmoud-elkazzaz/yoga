import Pose from "../components/Pose";
import "./../styles/Home.scss";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const [poses, setPoses] = useState({});
  const [isLoading, SetLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://yoga-api-nzy4.onrender.com/v1/poses"
        );
        setPoses(await response.json());
        if (setPoses) {
          SetLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        {poses &&
          !isLoading &&
          poses.map((item, index) => (
            <Pose
              key={index}
              id={item.id}
              englishName={item.english_name}
              img={item.url_svg}
            />
          ))}
      </div>
    </div>
  );
};

export default HomeScreen;
