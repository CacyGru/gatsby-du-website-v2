import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { FaMusic } from 'react-icons/fa';

const Music = () => {
  return (
    <Layout>
      <Seo title="Musik" />
      <div className=" flex">
        <div className="card-left">
          <h2>
            <FaMusic /> Musik
          </h2>
        </div>
        <div className="card-right">
          Hier wird im kürze ein Angebot meiner Musik zu finden sein.
        </div>
      </div>
    </Layout>
  );
};

export default Music;
