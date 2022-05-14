import Featured from "../components/featured/featured";
import Navbar from "../components/navbar/navbar";
import List from "./../components/list/list";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="" />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
