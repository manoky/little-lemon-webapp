import { Nav } from './Nav'
import logo from './Logo.svg'

export const Header = () => (
  <header className="navigation">
    <img src={logo} alt="" /> <Nav />
  </header>
)
