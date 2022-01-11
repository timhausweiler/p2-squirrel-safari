import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import api from '../Services/apiConfig';
import Form from './Form';

const default_input = {
  "name": "",
  "story": "" 
}

export default function Contribute() {

  const [input, setInput] = useState(default_input);
  const navigate = useNavigate();

  const handleTextInput = (event) => { 
    const { id, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    await api.post("/", { fields });
    setInput(default_input);
    navigate("/");
    // console.log(res.data);
  }

  return (
    <div>
      Add your own observation to our collection
      <Form
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
