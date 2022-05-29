import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      const res = await axios.get(
        `http://localhost:3300/api/movies/random?type=${type}`,
        {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODM0OTk1NGZhMTIwNzZjZmMwYTBkNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzYzNTI5OSwiZXhwIjoxNjU0MDY3Mjk5fQ.gAGv5oWzjqgKqsk88ZOUc0tyGuCetodSn3PzkebupKY",
          },
        }
      );
      // console.log(res.data);
      setContent(res.data[0]);
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={content.img}></img>
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>

          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
