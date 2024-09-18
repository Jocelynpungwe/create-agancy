import Logo from './Logo'
import Navlinks from './Navlinks'

const Header = () => {
  return (
    <header className="menu-open">
      <nav>
        <Logo />
        <Navlinks />
      </nav>
    </header>
  )
}

export default Header
