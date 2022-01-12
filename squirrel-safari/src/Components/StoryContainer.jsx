import React from 'react';
import StoryContent from './StoryContent';
import TakeWalkButton from './TakeWalkButton';
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../Services/apiConfig';

export default function StoryContainer(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = async () => {
    await api.delete(`/${id}`)
    navigate("/storylist")
  }

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
      <div>
        <Link to={`/story/${id}/edit`} className="link">Edit</Link> or <Link to ="/" className = "Link" onClick = {handleDelete}>delete</Link> this story
      </div>
    </div>
  )
}
