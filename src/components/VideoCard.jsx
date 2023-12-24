import { Avatar } from "@mui/material";

import "./VideoCard.css";
const VideoCard = ({ image, title, channel, views, timestamp,channelImage }) => {
  return (
    <div className="videoCard">
      <img src={image} className="videoCard_thumbnail"/>
      <div className="videocard_info">
        <Avatar className="videocard_avatar" alt={channel} src={channelImage}/>
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views}+{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
