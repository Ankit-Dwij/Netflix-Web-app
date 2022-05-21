import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        muted
        progress
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    </div>
  );
};

export default Watch;
