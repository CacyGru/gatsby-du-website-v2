import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../style/Header.scss';
/* import { BiHomeSmile } from 'react-icons/bi';
import { BsFileRichtext } from 'react-icons/bs';*/
import { FaBars } from 'react-icons/fa';
import * as AiOutline from 'react-icons/ai';
import Logo from '../images/DrumUP_Logo.svg';
import { SidebarData } from './SidebarData';

function MobileNav() {
  const activeStyles = {
    color: 'hsl(12, 100%, 42%)',
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="mobileNav">
      <Link to="#" className="menu-bars">
        <FaBars className="nav-bars" onClick={showSidebar} />
      </Link>
      <h2>Drum UP</h2>
      <Link to="/">
        <img width="100px" src={Logo} alt="Logo" className="logo" />
      </Link>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutline.AiOutlineClose />
            </Link>
          </li>

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
    </div>
  );
}

export default MobileNav;
