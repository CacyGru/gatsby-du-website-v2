import React, { useContext } from 'react';
import { Link } from 'gatsby';
import '../style/Header.scss';
import { GlobalDispatchContext } from '../context/GlobalContextProvider';
import { VscColorMode } from 'react-icons/vsc';
import Logo from '../images/DrumUP_Logo.svg';
import MobileNav from './MobileNav';
import { SidebarData } from './SidebarData';

const Header = () => {
  const dispatch = useContext(GlobalDispatchContext);

  const activeStyles = {
    color: 'hsl(12, 100%, 42%)',
  };

  return (
    <header className="header">
      <MobileNav />
      <div className="nav">
        <Link to="/">
          <img width="100px" src={Logo} alt="Logo" className="logo" />
        </Link>
        <nav>
          <ul>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path} activeStyle={activeStyles}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <VscColorMode
          className="dm-switch"
          type="button"
          size="2em"
          /* color="#3DB099" */
          onClick={() => {
            dispatch({ type: 'TOGGLE_THEME' });
          }}
        />
      </div>
    </header>
  );
};

export default Header;
