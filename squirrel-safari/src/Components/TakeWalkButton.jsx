import { useNavigate } from 'react-router-dom';

export default function TakeWalkButton(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/story/${props.nextId}`)
    props.fetchIds();
  }

  return (
    <button onClick={handleClick}>{props.buttonText}</button>
  )
}

