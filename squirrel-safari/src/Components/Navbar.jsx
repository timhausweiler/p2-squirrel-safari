import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/story/:id">Take a walk</Link>
      <Link to="/contribute">Contribute</Link>
    </div>
  )
}
