import Form from '../components/Form';
import React from 'react';
import { AiOutlineContacts } from 'react-icons/ai';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Kontakt = () => {
  return (
    <Layout>
      <Seo title="Kontakt" />
      <div className="center padding">
        <h1>
          <AiOutlineContacts /> Kontakt
        </h1>
        <Form />
      </div>
    </Layout>
  );
};

export default Kontakt;
