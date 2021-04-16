import Form from '../components/Form';
import React from 'react';
import Button2 from '../components/Button2';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Kontakt = () => {
  return (
    <Layout>
      <Seo title="Kontakt" />
      <div className="center">
        <h1>Kontakt</h1>
        <Form />
      </div>
    </Layout>
  );
};

export default Kontakt;
