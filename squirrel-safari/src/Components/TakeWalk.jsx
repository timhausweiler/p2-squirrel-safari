import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/apiConfig';

export default function TakeWalk() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const res = await api.get();
      console.log(res.data.records);
      // setStory(res.data.records);
    }
    fetchStories();
  }, [])
  
  return (
    <div>
      <h2>Start your own Squirrel Safari!</h2>
      <img
        src="https://i.imgur.com/4PjtPDR.jpg"
        alt="Map of Central Park"
        className="map"/>
    </div>
  )
}
