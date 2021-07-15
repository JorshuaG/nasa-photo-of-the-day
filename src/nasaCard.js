import React, { useState, useEffect } from "react";
import styled from "styled-components";

function handleVideo(url) {
  return <iframe width="800" height="450" title="youtubeEmbed" src={url} />;
}
function handleImage(url) {
  return <img src={url} alt="NASA photograph" />;
}
// const StyledNasaCard = styled.div`
//   width: 60%;
//   display: flex;
//   text-align: center;
//   background-color: "${(props) => props.theme.primaryColor}";
// `;

function NasaCard(props) {
  const mediaDisplay =
    props.mediaType === "video"
      ? handleVideo(props.mediaUrl)
      : handleImage(props.mediaUrl);

  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <div>{mediaDisplay}</div>
      <p>{props.description}</p>
    </div>
  );
}

export default NasaCard;
