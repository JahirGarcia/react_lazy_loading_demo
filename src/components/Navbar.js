import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes'

function Navbar() {

  return (
    <nav>
      <ul>
        {
          routes.map((route, index) => {
            return (
              <li key={ index } >
                <NavLink 
                  exact={ true } 
                  to={ route.path} 
                  className="navlink" 
                  activeClassName="navlink-active" >
                  { route.name }
                </NavLink>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

export default Navbar;