import { Link } from "react-router-dom";
import './../styles/favourites.scss'
const FavouritesScreen = () => {
  return (
    <div className="favourites">
      <p>You haven't saved any poses yet to your favourites!</p>
      <Link to="/">Explore Poses</Link>
    </div>
  );
};

export default FavouritesScreen;
