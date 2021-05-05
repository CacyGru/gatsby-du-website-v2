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
      <Seo title="Unterricht" />
      <div className=" flex">
        <div className="card-left">
          <h2>Menu</h2>
          <nav>
            <li>
              <button onClick={stateChange}>Punkt 1</button>{' '}
            </li>

            <li>
              <button onClick={stateChange2}>Punkt 2</button>{' '}
            </li>
            <li>
              <button onClick={stateChange3}>Punkt 3</button>{' '}
            </li>
          </nav>
        </div>
        <div className="card-right">
          <h2>Unterricht</h2>

          <div>{state}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Unterricht;
