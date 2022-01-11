import api from '../Services/apiConfig';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TakeWalkButton from './TakeWalkButton';

export default function StoryContent() {
  const [story, setStory] = useState({});
  const [click, setClick] =useState(true)

  const { id } = useParams();
  
  useEffect(() => {
    const fetchStories = async () => {
      const res = await api.get(`/${id}`);
      setStory(res.data);
    };
    fetchStories();
  }, [click])

  if (!story.fields) {
    return <div><h2>Walking...!!!</h2></div>
  }
    
  return (
    <div>
      <h2>{story.fields?.name}</h2>
      <h4>{story.fields.story}</h4>
      <TakeWalkButton click={click} setClick={setClick}/>
    </div>
  )
}
