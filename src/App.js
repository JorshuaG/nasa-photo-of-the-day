import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_Key, BASE_URL } from "./index";
import { Player } from "video-react";
import "../node_modules/video-react/dist/video-react.css";

function App() {
  const [data, setData] = useState([]);
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
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <h1>{data.title}</h1>
      <h2>{data.date}</h2>
      <iframe
        width="800"
        height="450"
        title="youtubeEmbed"
        src="https://www.youtube.com/embed/V_Kd4YBNs7c?rel=0"
      />
    </div>
  );
}

export default App;
