import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import api from '../Services/apiConfig';


export default function TakeWalkButton(props) {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate(`/story/${props.nextId}`)
    props.setClick(!props.click);
  }

  return (
    <button onClick={handleClick}>{props.buttonText}</button>
  )
}

