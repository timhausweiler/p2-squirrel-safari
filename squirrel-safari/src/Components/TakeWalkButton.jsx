import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import api from '../Services/apiConfig';


export default function TakeWalkButton(props) {
  const [nextId, setNextId] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIds = async () => {
      const res = await api.get();
      const len = res.data.records.length;
      const random = Math.floor(Math.random() * len)
      console.log(random);
      setNextId(res.data.records[random].id);
    }
    fetchIds();
  }, [props])

  const handleClick = () => {
    navigate(`/story/${nextId}`)
    props.setClick(!props.click);
  }

  return (
    <button onClick={handleClick}>{props.buttonText}</button>
  )
}

