import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <div className = "navbar">
      <div className = "nav-img-container"><Link to="/" ><img src = "https://i.imgur.com/RK3UbZi.jpeg" className = "nav-img" alt = "logo"></img></Link></div>
      <div className="nav-txt-container">
        <Link to={`/story/${props.nextId}`} className = "nav-text">Take a walk</Link>
        <Link to="/storylist" className="nav-text">All stories</Link>
        <Link to="/contribute" className="nav-text">Contribute</Link>
      </div>
    </div >
  )
}
