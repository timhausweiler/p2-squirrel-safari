import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TakeWalk() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await api.get();
      // console.log(res.data.records);
      setCharacters(res.data.records);
    }
    fetchCharacters();
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
