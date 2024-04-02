import { NavLink,Outlet} from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
      <header>
      <nav>
          <h1 className='nav__title'>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
       </nav> 
        <main>
          <Outlet/>
        </main>
        <footer></footer>
      </header>
    </>
  )
}
