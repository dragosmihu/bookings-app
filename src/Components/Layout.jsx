import { Outlet, Link } from "react-router-dom";
import {useAuth} from '../Context/AuthContext'
const Layout = () => {
  const { isLoggedIn,fullName, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
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
          <li>
            <div id="accountNavDiv">{isLoggedIn ? 
              <div>
                <p>{fullName}</p>
                <Link to="/" onClick={handleLogOut}>Logout</Link>
              </div>
              : 
              <div>
                <Link to="/register">Înregistrare</Link>
                <Link to="/login">Autentificare</Link>
              </div>
            }
            </div>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;