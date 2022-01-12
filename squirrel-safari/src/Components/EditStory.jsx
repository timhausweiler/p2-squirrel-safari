import Form from './Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import api from '../Services/apiConfig';

const default_input = {
  "name": "",
  "story": "" 
}

export default function EditStory() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchStories = async () => {
      const res = await api.get(`/${id}`);
      setInput(res.data.fields);
    };
    fetchStories();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    delete input.date;
    const fields = input;
    await api.put(`/${id}`, { fields });
    setInput(default_input);
    navigate(`/story/${id}`);
    // console.log(res.data);
  }
  
  const handleTextInput = (event) => { 
    const { id, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  return (
    <div>
      <h2>Edit your story</h2>
      <Form 
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
      ></Form>
    </div>
  )
}
