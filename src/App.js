import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";
import {BrowserRouter as Router, Route} from 'react-router-dom'


import { formatSeasons } from "./utils/formatSeasons";
import { fetchShow } from './api/fetchEpisodes'

import Episodes from "./components/Episodes";
import "./styles.css";
import EpisodePage from "./components/episodePage";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => {
    fetchShow()
    .then(res => {
      setShow(res.data);
      setSeasons(formatSeasons(res.data._embedded.episodes));
    });
  }, []);

  const handleSelect = e => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2>Fetching data...</h2>;
  }

  return (
    <Router>
      <Route exact path='/'>
        <div className="App">
          <img className="poster-img" src={show.image.original} alt={show.name} />
          <h1>{show.name}</h1>
          {parse(show.summary)}
          <Dropdown
            options={Object.keys(seasons)}
            onChange={handleSelect}
            value={selectedSeason || "Select a season"}
            placeholder="Select an option"
            data-testid='dropdown'
          />
          <Episodes episodes={episodes} />
        </div>
      </Route>
      <Route exact path='/episode/:episodeid'>
        <EpisodePage episodes={show._embedded.episodes}/>
      </Route>
    </Router>
  );
}
