import React from 'react';
import StoryContent from './StoryContent';
import TakeWalkButton from './TakeWalkButton';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function StoryContainer(props) {
  const { id } = useParams();

  return (
    <div>
      <h2>Start your Squirrel Safari</h2>
      <div className= "story-container">
        <img
          src="https://i.imgur.com/4PjtPDR.jpeg"
          alt="map of central park"
          className = "map"
        />
        <StoryContent/>
      </div>
      <TakeWalkButton buttonText="Walk to next squirrel" nextId={props.nextId} setClick={props.setClick} />
      <br/>
      <Link to={`/story/${id}/edit`} className = "link">Or edit this story</Link>
    </div>
  )
}
