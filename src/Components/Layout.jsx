import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Despre noi</Link>
          </li>
          <li>
            <Link to="/plays">Spectacole</Link>
          </li>
          <li>
            <Link to="/actors">Actori</Link>
          </li>
          <li>
            <Link to="/map">Harta</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;