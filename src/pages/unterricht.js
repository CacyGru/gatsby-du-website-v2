import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Unterricht = () => {
  return (
    <Layout>
      <Seo title="Unterricht" />
      <div className=" flex">
        <div className="card-left">
          <h2>Menu</h2>
          <nav>
            <li>Punkt 1</li>
            <li>Punkt 2</li>
            <li>Punkt 3</li>
            <li>Punkt 4</li>
          </nav>
        </div>
        <div className="card-right">
          <h2>Unterricht</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi
            sed corporis voluptatum, voluptatibus optio! Ratione, reiciendis
            soluta sed dolor, numquam repudiandae veniam blanditiis minima,
            culpa neque tempore! Veritatis, pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi
            sed corporis voluptatum, voluptatibus optio! Ratione, reiciendis
            soluta sed dolor, numquam repudiandae veniam blanditiis minima,
            culpa neque tempore! Veritatis, pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi
            sed corporis voluptatum, voluptatibus optio! Ratione, reiciendis
            soluta sed dolor, numquam repudiandae veniam blanditiis minima,
            culpa neque tempore! Veritatis, pariatur?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Unterricht;
