import { Avatar } from "@mui/material";
import "./ChannelRow.css";

import VerifiedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
const ChannelRow = ({
  image,
  subs,
  channel,
  verified,
  noOfVideos,
  description,
}) => {
  return (
    <div className="ChannelRow">
      <Avatar className="ChannelRow_logo" src={image} />
      <div className="ChannelRow_text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers + {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
