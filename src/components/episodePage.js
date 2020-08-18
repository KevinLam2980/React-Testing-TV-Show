import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';


const EpisodePage = props => {
const {episodes} = props
const {episodeid} = useParams()

useEffect(() => {
    console.log(episodeid)
    console.log(episodes)
}, [])

    return(
        <div className='episodePage'>
            {
                episodes.map(e => {
                    if(e.id == episodeid){
                        return(
                            <div>
                                {e.image && (
                                 <img className="episode-image" src={e.image.medium} alt={e.name} />
                                 )}
                                <h2>{e.name}</h2>
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
                        )
                    }
                })
            }
        </div>
    )
}

export default EpisodePage