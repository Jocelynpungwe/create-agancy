import { navLinks, type NavLinks } from '../../utils/links'

type LinksProps = {
  buttonClass: 'secondary-button' | 'primary-button'
}

const Links = ({ buttonClass }: LinksProps) => {
  return (
    <>
      <ul>
        {navLinks.map((newLink: NavLinks) => {
          const { id, name, link } = newLink
          return (
            <li key={`${buttonClass}-${id}`}>
              <a className="link" href={link}>
                {name}
              </a>
            </li>
          )
        })}
      </ul>
      <button className={buttonClass}>Schedule a Call</button>
    </>
  )
}

export default Links
