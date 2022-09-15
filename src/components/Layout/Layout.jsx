import { Outlet, NavLink } from 'react-router-dom';


const Layout = () => {
 return (
  <>
   <header>
      <NavLink to="/home" className={({isActive}) => isActive ? 'my__active' : ''}>Home</NavLink>
      <NavLink to="/news" className={({isActive}) => isActive ? 'my__active' : ''}>News</NavLink>
      <NavLink to="/contacts" className={({isActive}) => isActive ? 'my__active' : ''}>Contacts</NavLink>
      <NavLink to="/services" className={({isActive}) => isActive ? 'my__active' : ''}>Services</NavLink>
   </header>
   <Outlet/>
  </>
 )
}

export { Layout };