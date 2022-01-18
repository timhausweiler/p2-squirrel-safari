import api from '../Services/apiConfig';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Story(props) {
  const [story, setStory] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchStories = async () => {
      const res = await api.get(`/${id}`);
      setStory(res.data);
    };
    fetchStories();
  }, [props, id])

  if (!story.fields) {
    return <div><h2>Walking...!!!</h2></div>
  }
    
  return (
    <div className = "story-content">
      <div className="headline">Submitted by {story.fields?.name} on {story.fields.date}</div>
      <div className = "story">{story.fields.story}</div>
    </div>
  )
}
