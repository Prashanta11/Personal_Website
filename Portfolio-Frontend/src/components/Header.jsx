import { NavLink } from 'react-router'
import logo from '../assets/logo.png'

const Header = () => {
  const navItems = [{
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/About'
  },
  {
    name: 'Timeline',
    link: '/Timeline'
  },
  {
    name: 'Experience',
    link: '/Experience'
  },
  {
    name: 'Project',
    link: '/Project'
  },
  {
    name: 'Application',
    link: '/Application'
  },
  {
    name: 'Contact',
    link: '/Contact'
  },

]
  return (
    <div className="flex items-center justify-between  p-5 py-2 bg-custom-gray shadow-xl shadow-stone-300/50  ">
      <div><img src={logo} alt="Logo"
      className='size-20 rounded-full' />
      </div>

      <nav className='mx-auto '>
        <ul className="flex space-x-6 text-lg font-semibold">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link} className='text-stone-1000 hover:text-blue-800'>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header