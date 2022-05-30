import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import "./list.scss";
import ListItem from "./../listItem/listItem";

const List = ({ list }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let dist = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + dist}px)`;
    }
    if (direction === "right" && slideNumber < 8 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + dist}px)`;
    }
  };

  return (
    <div>
      <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
          <ArrowBackIosNewOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
            {list.content.map((item, i) => (
              <ListItem key={i} index={i} item={item} />
            ))}
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
