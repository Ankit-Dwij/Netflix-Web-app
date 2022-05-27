import Featured from "../../components/featured/featured";
import Navbar from "../../components/navbar/navbar";
import List from "../../components/list/list";
import "./home.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [Lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3300/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODM0OTk1NGZhMTIwNzZjZmMwYTBkNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzYzNTI5OSwiZXhwIjoxNjU0MDY3Mjk5fQ.gAGv5oWzjqgKqsk88ZOUc0tyGuCetodSn3PzkebupKY",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {Lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
