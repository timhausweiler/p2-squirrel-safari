import { useNavigate } from 'react-router-dom';
import api from '../Services/apiConfig';
import { toast } from "react-toastify";

export default function DeleteStory(props) {

  const navigate = useNavigate();

  const handleDelete = async ()=>{
    await api.delete(`/${props.id}`)
    navigate("/characters")
  }

  return (
    <button onClick = {handleDelete}>Delete character</button>
  )
}
