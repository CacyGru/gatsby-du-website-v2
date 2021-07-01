import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import '../style/uebermich.scss';
import cgdesktop from '../images/carsten-grüter-desktop.jpg';
import cgmobile from '../images/carsten-grüter-mobile.jpg';
import cg from '../images/cg.png';

const Uebermich = () => {
  return (
    <Layout>
      <Seo title="Über mich" />

      <div>
        <div className="card">
          <figure>
            <picture>
              <source srcSet={cgmobile} media="(max-width: 768px)" />
              <source srcSet={cgdesktop} media="(min-width: 769px)" />
              <img
                className="cgimg picture"
                src={cg}
                alt="Foto Carsten Grüter"
              />
            </picture>

            <figcaption>
              <a
                className="topel"
                href="https://myriamtopel.de"
                target="_blank"
                rel="noreferrer noopener"
              >
                &copy; Myriam Topel Fotografie
              </a>
            </figcaption>
          </figure>

          <p>
            <span className="bold">
              {' '}
              <span className="drumup"> Drum UP</span> – Carsten Grüter
            </span>
            <br />
            Ruhrtalstraße 28 &middot; 40233 Düsseldorf
            <br />
            <span className="drumup"> T</span> 0170 282 49 29{' '}
            <span className="drumup">|</span>
          </p>
        </div>
      </div>
      <div>
        <div className="bio">
          <div className="flexBio">
            <div className="datumll">Seit 1999</div>
            <div className="inhaltll">Dozent für Drums und Percussion</div>
          </div>

          <div className="flexBio">
            <div className="datumll">Seit 2013</div>
            <div className="inhaltll">
              Leiter Sambaband »Somedrums« mit Auftritten im In- und Ausland
            </div>
          </div>

          <div className="flexBio">
            <div className="datumll">Seit 2015</div>
            <div className="inhaltll">
              Teamtrainings Porsche, Mercedes, Equitana, Mars, u.v.a.{' '}
            </div>
          </div>

          <div className="flexBio">
            <div className="datumll">Seit 2016</div>
            <div className="inhaltll">
              Kultur und Schule Projekte an Grundschulen
            </div>
          </div>
        </div>

        <div className="center bio">
          <h3>Fortbildung</h3>
          <p>Klangschalen Massage, Peter Hess Institut, 2017 </p>
          <p> Zertifizierter Audio Engineer Hofa Studios, 2008</p>
          <h3>Studium</h3>{' '}
          <p>Schlagzeug, Hoogeschool vor de Kunsten, Arnheim,1999 - 2002</p>
          <h3>Schule</h3>
          <p> Abitur, Gymnasium Neuwerk, Mönchengladbach, 1997</p>
        </div>
      </div>
    </Layout>
  );
};

export default Uebermich;
