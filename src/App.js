import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_Key, BASE_URL } from "./index";
import NasaCard from "./nasaCard";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: "${(props) => props.theme.primaryColor}";
`;

function App() {
  const [data, setData] = useState([]);

  // turned off while writing to stop 429 err

  // const searchDate = () => {
  //   axios
  //     .get(`${BASE_URL}/planetary/apod?api_key=${API_Key}`)
  //     .then((resp) => {
  //       setData(resp.data);

  //     })
  //     .catch((error) => console.log(error));
  // };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_Key}`)
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <StyledApp>
      <div>
        <input type="text" placeholder="Month"></input>
        <input type="text" placeholder="Day"></input>
        <input type="text" placeholder="Year"></input>
      </div>

      <button>Search Picture of the Day</button>

      <NasaCard
        title={data.title}
        date={data.date}
        mediaType={data.media_type}
        mediaUrl={data.url}
        description={data.explanation}
      />
    </StyledApp>
  );
}

export default App;
