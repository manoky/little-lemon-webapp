import { Nav } from './Nav'
import logo from '../../Logo.svg'
import { Link } from 'react-router-dom'
import './header.css'

export const Header = () => (
  <header className="navigation">
    <div className="navigation-inner">
      <div className="humberger-menu" role="menu" aria-labelledby="menubutton">
        <div className="humberger-menu-item" role="menuitem" />
        <div className="humberger-menu-item" role="menuitem" />
        <div className="humberger-menu-item" role="menuitem" />
      </div>
      <Link className="nav-logo-link" to="/" aria-label="little lemon logo">
        <img src={logo} alt="" />{' '}
      </Link>
      <Nav />
    </div>
  </header>
)
