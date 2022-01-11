import React from 'react';
import StoryContent from './StoryContent';
import TakeWalkButton from './TakeWalkButton';
import { useState } from 'react';

export default function StoryContainer(props) {
  const [click, setClick] = useState(true);
  
  return (
    <div>
      <h2>Start your Squirrel Safari</h2>
      <div className= "story-container">
        <img
          src="https://i.imgur.com/4PjtPDR.jpeg"
          alt="map of central park"
          className = "map"
        />
        <StoryContent className="story-content" click={props.click}/>
      </div>
      <TakeWalkButton click={props.click} setClick={props.setClick}/>
    </div>
  )
}
