import React, { useState, useEffect } from "react";

function handleVideo(url) {
  return <iframe width="800" height="450" title="youtubeEmbed" src={url} />;
}
function handleImage(url) {
  return <img src={url} alt="NASA photograph" />;
}
function handleHide() {
  return <button></button>;
}
function handleShow(explanation) {
  return (
    <div>
      <p>{explanation}</p>
    </div>
  );
}

function NasaCard(props) {
  const [show, setShow] = useState(true);
  const descriptionDisplay =
    show === true ? handleShow(props.description) : handleHide();
  const mediaDisplay =
    props.mediaType === "video"
      ? handleVideo(props.mediaUrl)
      : handleImage(props.mediaUrl);

  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <div>{mediaDisplay}</div>
      <button>Show Content</button>

      <p>{descriptionDisplay}</p>
    </div>
  );
}

export default NasaCard;
