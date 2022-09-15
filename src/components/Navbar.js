import { NavLink } from "react-router-dom";

const link = {
    width: '100px',
    padding: '8px',
    margin: '0 6px 6px',
    background: '#3b4754',
    textDecoration: 'none',
    color: '#f7f6f2',
    padding: '.5rem',
    borderRadius: '30px',
  }

const Navbar = () => {
  return (
  <div className="navbar">
    <NavLink
      className='link'
      to="/"
      exact style={link}
      // activeStyle={{background: '#4b616c'}}
    >
    Home
    </NavLink>
    <NavLink
      className='link'
      to="/lawyers"
      exact style={link}
      // activeStyle={{background: '#4b616c'}}
      >
      Lawyers
    </NavLink>
    <NavLink
      className='link'
      to="/litigations"
      exact style={link}
      // activeStyle={{background: '#4b616c'}}
      >
      Litigations 
    </NavLink>
    <NavLink
      className='link'
      to="/lawyers/new"
      exact style={link}
      // activeStyle={{background: '#4b616c'}}
      >
      Add Lawyer Profile
    </NavLink>
  </div>
  )
}

export default Navbar