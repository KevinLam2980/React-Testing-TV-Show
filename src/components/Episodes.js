import React from 'react';
import parse from 'html-react-parser';
import { useHistory } from 'react-router-dom'

export default function Episodes(props) {
  const History = useHistory()

  
  return (
    <div className="episodes">
      {props.episodes.map(e => (
        <div onClick={(evt) => {
          evt.preventDefault()
          History.push(`/episode/${e.id}`)
          console.log(e.id)}} className="episode" key={e.id} data-testid='episodes'>
          {e.image && (
            <img className="episode-image" src={e.image.medium} alt={e.name} />
          )}
          <div className="episode-info">
            <p className="episode-number">
              Season {e.season}, Episode {e.number}
            </p>
            <h3>{e.name}</h3>
            {e.summary && parse(e.summary)}
            <div className="flex-spacer" />
            <p className="episode-runtime">{e.runtime} minutes</p>
          </div>
        </div>
      ))}
    </div>
  );
}
