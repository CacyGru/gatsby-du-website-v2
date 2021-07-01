import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Music = () => {
  return (
    <Layout>
      <Seo title="Musik" />
      <div className=" flex">
        <div className="card-left">
          <h2>Musik</h2>
        </div>
        <div className="card-right">
          Hier wird im kürze ein Angebot meiner Musik zu finden sein.
        </div>
      </div>
    </Layout>
  );
};

export default Music;
