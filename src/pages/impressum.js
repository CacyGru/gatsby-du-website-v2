import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Impressum = () => {
  return (
    <Layout>
      <Seo title="Impressum" />
      <div className="impressum" id="impressum">
        <div className="card-top">
          <h2>Impressum</h2>
        </div>
        <div className="card-content">
          <p>
            <span class="bold">
              <span class="drumup"> Drum UP</span> – Carsten Grüter
            </span>
            <br />
            Ruhrtalstraße 28 <br />
            40233 Düsseldorf
            <br />
            <span class="drumup"> T</span> 0170 282 49 29
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum;
