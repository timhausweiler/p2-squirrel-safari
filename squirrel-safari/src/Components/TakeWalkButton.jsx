import { useNavigate } from 'react-router-dom';
import React from 'react'

export default function TakeWalkButton() {

  const navigate = useNavigate();

  return (
    <button onClick= {()=>{navigate("/takewalk")}}>Take a walk!</button>
  )
}
