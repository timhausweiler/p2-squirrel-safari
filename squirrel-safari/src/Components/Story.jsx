import api from '../Services/apiConfig';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Story() {
  const [story, setStory] = useState({}); 
  const { id } = useParams();
  
  useEffect(() => {
    const fetchStories = async () => {
      await api.get(`/${id}`);
      setStory(res.data);
    };
    fetchStories();
  }, [])

  if (!story.fields) {
    return <div><h2>Walking...!!!</h2></div>
    }
    
    return (
      <div>
        <h2>{story.fields?.name}</h2>
        <h4>{story.fields.story}</h4>
        
      </div>

  return (
    <div>
      
    </div>
  )
}
