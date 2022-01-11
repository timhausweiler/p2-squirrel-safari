import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import api from '../Services/apiConfig';


export default function TakeWalkButton() {
  const [id, setId] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStories = async () => {
      const res = await api.get();
      const len = res.data.records.length;
      const random = Math.floor(Math.random() * len)
      setId(res.data.records[random].id);
    }
    fetchStories();
  }, [id])

  const handleClick = () => {
    navigate(`/story/${id}`)
  }

  return (
    <button onClick={handleClick}>Take a walk!</button>
  )
}
