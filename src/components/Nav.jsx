import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <span className="nav__brand">Itssophier</span>
        <nav className="nav__links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Nav
