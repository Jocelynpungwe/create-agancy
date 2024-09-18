import Links from '../header/Links'
import { useAppSelector } from '../../utils/hooks/hooks'

const Aside = () => {
  const { menuBar } = useAppSelector((store) => store.toggle)
  return (
    <aside id="sidebar" style={{ display: menuBar ? 'block' : 'none' }}>
      <div className="nav-menu">
        <Links buttonClass="primary-button" />
      </div>
    </aside>
  )
}

export default Aside
