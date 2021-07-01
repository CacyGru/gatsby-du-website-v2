import React from 'react';
import { Link } from 'gatsby';
import AGBs from '../assets/AGBs_DrumUpUnterricht.pdf';
import Preisliste from '../assets/Preisliste_DrumUpUnterricht.pdf';

const Unterricht1 = () => {
  return (
    <div>
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
          in Mönchegladbach
        </h3>
        <p>
          RED BOX am SparkassenPark
          <br />
          Am Nordpark 299 <br />
          41069 Mönchengladbach
        </p>
        <p>
          <li>- professioneller Unterricht für Jung und Alt</li>
          <li>- individuell an deine Wünsche angepasst</li>
          <li>- keine Vorkenntnisse benötigt</li>
          <li>- eigener Jitsi Server für Online Unterricht</li>
          <li>- Theorie und Praxis für die Studienvorbereitung</li>
        </p>

        <Link className="btn-sideNav" to="/kontakt">
          Probiere es aus bei einer kostenlosen Probestunde!
        </Link>

        <a href={Preisliste}> Preisliste</a>

        <a href={AGBs}> AGBs</a>
      </div>
    </div>
  );
};

export default Unterricht1;
