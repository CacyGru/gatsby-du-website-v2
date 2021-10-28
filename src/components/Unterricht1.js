import React from 'react';
import { Link } from 'gatsby';

const Unterricht1 = ({ stateChange4, stateChange5 }) => {
  return (
    <div className="center unterricht">
      <h1>Drum UP Schlagzeugunterricht</h1>
      <div>
        <h3>
          Ab sofort in der
          <a
            href="https://redbox-mg.de/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            RED BOX
          </a>{' '}
          in Mönchengladbach
        </h3>
        <p>
          RED BOX am SparkassenPark
          <br />
          Am Nordpark 299 <br />
          41069 Mönchengladbach
        </p>
        <ul className="bullet">
          <li>professioneller Unterricht für Jung und Alt</li>
          <li>individuell an deine Wünsche angepasst</li>
          <li>keine Vorkenntnisse benötigt</li>
          <li>eigener Jitsi Server für Online Unterricht</li>
          <li>Theorie und Praxis für die Studienvorbereitung</li>
        </ul>
      </div>
      <Link className="btn-sideNav" to="/kontakt">
        Probiere es aus bei einer kostenlosen Probestunde!
      </Link>
    </div>
  );
};

export default Unterricht1;
