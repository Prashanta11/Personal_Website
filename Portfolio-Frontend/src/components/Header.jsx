import { NavLink } from 'react-router'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="flex items-center justify-around  pl-5 py-2 bg-stone-400 shadow-xl shadow-stone-300/50  ">
      <div><img src={logo} alt="Logo"
      className='size-20 rounded-full' />
      </div>

      <nav className='pl-5 '>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About" className="hover:text-blue-500">About</NavLink>
          </li>
          <li>
            <NavLink to="/Timeline" className="hover:text-blue-500">Timeline</NavLink>
          </li>
          <li>
            <NavLink to="/Experience" className="hover:text-blue-500">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/Project" className="hover:text-blue-500">Project</NavLink>
          </li>
          <li>
            <NavLink to="/Application" className="hover:text-blue-500">Apps</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="hover:text-blue-500">Contacts</NavLink>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Header