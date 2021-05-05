import React, { useContext } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../style/styles.scss';
import { GlobalStateContext } from '../context/GlobalContextProvider';
import ScrollButton from './ScrollButton';

const Layout = (props) => {
  const state = useContext(GlobalStateContext);
  return (
    <div className={state.theme}>
      <div className="bg">
        <div className="header-container">
          <Header />
        </div>
        <div className="container">
          <div className="card">
            <div className="content center">{props.children}</div>

            <ScrollButton />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
