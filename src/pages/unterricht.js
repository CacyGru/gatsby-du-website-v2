import React, { useState } from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Unterricht1 from '../components/Unterricht1';
import Blog from '../components/Blog';
import AGBs from '../components/AGBs';
import Preise from '../components/Preise';
import OnlineUnterricht from '../components/OnlineUnterricht';
import { FaDrum } from 'react-icons/fa';

const Unterricht = (props) => {
  const [state, setState] = useState(<Unterricht1 />);
  const stateChange = () => {
    setState(<Unterricht1 />);
  };
  const stateChange2 = () => {
    setState(<Blog />);
  };
  const stateChange3 = () => {
    setState(<OnlineUnterricht />);
  };
  const stateChange4 = () => {
    setState(<Preise />);
  };
  const stateChange5 = () => {
    setState(<AGBs />);
  };

  return (
    <Layout>
      <Seo
        title="Unterricht"
        description="Schlagzeugunterricht in Mönchengladbach in der RedBox. Geeignet für alle Altersklassen und Level. Es sind keine Vorkenntnisse erforderlich"
      />
      <div className="flex">
        <div className="card-left">
          <h2>
            <FaDrum /> Unterricht
          </h2>
          <nav>
            <ul>
              <li>
                <button className="btn-sideNav" onClick={stateChange}>
                  Unterricht
                </button>{' '}
              </li>
              <li>
                <button className="btn-sideNav" onClick={stateChange2}>
                  Blog
                </button>{' '}
              </li>
              <li>
                <button className="btn-sideNav" onClick={stateChange3}>
                  Online
                </button>{' '}
              </li>
              <li>
                <button className="btn-sideNav" onClick={stateChange4}>
                  Preise
                </button>{' '}
              </li>
              <li>
                <button className="btn-sideNav" onClick={stateChange5}>
                  AGBs
                </button>{' '}
              </li>
            </ul>
          </nav>
        </div>
        <div className="card-right">
          <div>{state}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Unterricht;
