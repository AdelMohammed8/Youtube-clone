import "./VideoRow.css";

const VideoRow = ({
  views,
  subs,
  description,
  channel,
  timestamp,
  title,
  image,
}) => {
  return (
    <div className="VideoRow">
      <img src={image} />
      <div className="VideoRow_text">
        <h3>{title}</h3>
        <p className="VideoRow_headline">
          {channel} .
          <span className="VideoRow_subs">
            <span className="VideoRow_subNum">{subs}</span>
               Subscribers {" "}
          </span>
          {views} . {timestamp}
        </p>
        <p className="VideoRow_description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
