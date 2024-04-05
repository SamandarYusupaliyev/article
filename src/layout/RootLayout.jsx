import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <img
          // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRTG05oOfBLA&psig=AOvVaw0vo5OIfbJCULW6coB_K9CC&ust=1712333999435000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCND--LH7qIUDFQAAAAAdAAAAABAE"
          alt=""
        />
        <nav>
          <h1 className="nav__title">Tilla Palov</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </header>
    </>
  );
}
