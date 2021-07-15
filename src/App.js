import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_Key, BASE_URL } from "./index";
import NasaCard from "./nasaCard";

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
      <NasaCard
        title={data.title}
        date={data.date}
        mediaType={data.media_type}
        mediaUrl={data.url}
        description={data.explanation}
      />
    </div>
  );
}

export default App;
