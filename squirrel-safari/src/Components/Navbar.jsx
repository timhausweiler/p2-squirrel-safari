import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to={`/story/${props.nextId}`}>Take a walk</Link>
      <Link to="/contribute">Contribute</Link>
    </div>
  )
}
