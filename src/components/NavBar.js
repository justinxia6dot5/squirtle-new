import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="member">Become a member</Link>
      <Link style={linkStyle} to="members">Current members</Link>
      <Link style={linkStyle} to="services">Services</Link>
      <Link style={linkStyle}>Search</Link>
    </div>
  )
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '30px',
  // fontFamily: 'NanumGothic',
  margin: '15px 5px'
}

export default NavBar;