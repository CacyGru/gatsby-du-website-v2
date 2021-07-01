import React, { useState } from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Unterricht1 from '../components/Unterricht1';
import Unterricht2 from '../components/Unterricht2';
import Unterricht3 from '../components/Unterricht3';

const Unterricht = () => {
  const [state, setState] = useState(<Unterricht1 />);
  const stateChange = () => {
    setState(<Unterricht1 />);
  };
  const stateChange2 = () => {
    setState(<Unterricht2 />);
  };
  const stateChange3 = () => {
    setState(<Unterricht3 />);
  };

  return (
    <Layout>
      <Seo
        title="Unterricht"
        description="Schlagzeugunterricht in Mönchengladbach in der RedBox. Geeignet für alle Altersklassen und Level. Es sind keine Vorkenntnisse erforderlich"
      />
      <div className=" flex">
        <div className="card-left">
          <h2>Unterricht</h2>
          <nav>
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
