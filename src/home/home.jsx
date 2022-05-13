import Featured from "../components/featured/featured";
import Navbar from "../components/navbar/navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
    </div>
  );
};

export default Home;
