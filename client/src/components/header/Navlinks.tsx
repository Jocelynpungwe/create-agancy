import hamburgerImg from '../../assets/mobile/icon-hamburger.svg'
import hamburgerCross from '../../assets/mobile/icon-cross.svg'
import { openMenuBar } from '../../reducer/toggleSlice'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks'
import Links from './Links'

const Navlinks = () => {
  const dispatch = useAppDispatch()
  const { menuBar } = useAppSelector((store) => store.toggle)

  return (
    <div className="nav-menu">
      <div id="nav-menu-links" className="nav-main-container nav-menu-links">
        <Links buttonClass="secondary-button" />
      </div>
      <div
        id="nav-hamburger-div"
        className="nav-main-container nav-hamburger-div"
      >
        <img
          id="hamburger"
          className="hamburger"
          src={hamburgerImg}
          style={{ display: menuBar ? 'none' : 'block' }}
          alt="hamburger menu button"
          onClick={() => dispatch(openMenuBar())}
        />
        <img
          id="hamburger-cross"
          className="hamburger-cross"
          src={hamburgerCross}
          style={{ display: menuBar ? 'block' : 'none' }}
          onClick={() => dispatch(openMenuBar())}
        />
      </div>
    </div>
  )
}

export default Navlinks
