import React, { useContext } from 'react';
import { Link } from 'gatsby';
import '../style/Header.scss';
import { GlobalDispatchContext } from '../context/GlobalContextProvider';
/* import ButtonLight from "./Buttonlight" */
import { VscColorMode } from 'react-icons/vsc';
import { BiHomeSmile } from 'react-icons/bi';
import { FaDrum } from 'react-icons/fa';
import { AiOutlineTeam, AiOutlineContacts } from 'react-icons/ai';
import Logo from '../images/DrumUP_Logo.svg';
import Testbutton from '../images/Testbutton.svg';

const Header = () => {
  const dispatch = useContext(GlobalDispatchContext);

  const activeStyles = {
    color: '#3db099',
  };

  return (
    <header className="header">
      <Link to="/">
        <img width="100px" src={Logo} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeStyles}>
              <BiHomeSmile /> Start
            </Link>
          </li>
          <li>
            <Link to="/unterricht" activeStyle={activeStyles}>
              <FaDrum /> Unterricht
            </Link>
          </li>
          <li>
            <Link to="/teamtraining" activeStyle={activeStyles}>
              <AiOutlineTeam /> Teamtraining
            </Link>
          </li>
          <li>
            <Link to="/kontakt" activeStyle={activeStyles}>
              <AiOutlineContacts /> Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      <Link to="/">
        <img className="testbutton" src={Testbutton} alt="Logo" />
      </Link>

      <VscColorMode
        className="dm-switch"
        type="button"
        size="2em"
        /* color="#3DB099" */
        onClick={() => {
          dispatch({ type: 'TOGGLE_THEME' });
        }}
      />
    </header>
  );
};

export default Header;
