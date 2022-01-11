import React from 'react';
import StoryContent from './StoryContent';
import TakeWalkButton from './TakeWalkButton';
import { useState } from 'react';

export default function StoryContainer(props) {
  return (
    <div>
      <h2>Start your Squirrel Safari</h2>
      <div className= "story-container">
        <img
          src="https://i.imgur.com/4PjtPDR.jpeg"
          alt="map of central park"
          className = "map"
        />
        <StoryContent className="story-content"/>
      </div>
      <TakeWalkButton buttonText = "Walk to next squirrel"/>
    </div>
  )
}
