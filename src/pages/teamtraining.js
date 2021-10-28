import React from 'react';
import { Link } from 'gatsby';
import '../style/teamtraining.scss';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Sax from '../images/sax.svg';
import Bass from '../images/bass.svg';
import Trompete from '../images/trumpet.svg';
import Ausrufe from '../images/Ausrufe.svg';
import { AiOutlineTeam } from 'react-icons/ai';

const Teamtraining = () => {
  return (
    <Layout>
      <Seo
        title="Teamtraining"
        description="Drum UP Teamtraining nutzt Energie und gruppendynamische Prozesse einer (Trommel)Band, um mit Mitarbeitern, Kunden, Gästen, Kindern, Schülern oder Vereinsmitgliedern ein kraftvolles Erlebnis zu erschaffen."
      />

      <div className="flex teamtraining">
        <div className="card-left">
          <h2>
            <AiOutlineTeam /> Teamtraining
          </h2>
          <div className="sax img">
            <img src={Sax} className="sax_img" alt="Saxophon Spieler" />
          </div>
          <div className="bass img">
            <img src={Bass} className="bass_img" alt="Kontrabass Spieler" />
          </div>
          <div className="frei img">
            <img
              className="frei_img"
              src={Ausrufe}
              alt="Bild eines Ausrufezeichens"
            />
          </div>
        </div>

        <div className="card-right">
          <h3>Was ist Drum UP Teamtraining</h3>
          <p>
            <span className="bold"> Drum UP</span>
            <span className="drumup"> Teamtraining</span> nutzt Energie und
            gruppendynamische Prozesse einer (Trommel)Band, um mit Ihren
            Mitarbeitern, Kunden, Gästen, Kindern, Schülern oder
            Vereinsmitgliedern ein kraftvolles Erlebnis zu erschaffen.
          </p>

          <p>
            <span className="bold"> Drum UP </span>
            <span className="drumup">Eventdrumming</span> ist eine mitreißende
            Trommelshow für (und falls gewünscht auch mit) Ihren Kunden, Gästen,
            Mitarbeitern. Drum UP Teamtrainings und Events können als aktive
            Komponente eingesetzt werden zum Beispiel
          </p>

          <div className="flex">
            <div>
              <ul className="bullet">
                <li>
                  als lebendiger Abschluss, etwa an einen langen Seminartag
                </li>
                <li>als spannendes Kick Off Event,</li>
                <li>als zeitlich variables Training in Unternehmen</li>
                <li>als Schulprojekt</li>
                <li>
                  oder einfach als spaßiges, aktives Element, zum Beispiel bei
                  einer Weihnachtsfeier oder einem Geburtstag.
                </li>
              </ul>
            </div>

            <div className="right2">
              <img
                className="trumpet_img"
                src={Trompete}
                alt="Bild Trompetenspieler"
              />
            </div>
          </div>
          <div className="right">
            <div className="content">
              <h3>Wie funktioniert Drum UP Teamtraining</h3>
              <p>
                Mit viel Spaß und Teamwork entsteht auf unterschiedlichsten
                Trommeln unter Anleitung eines erfahrenen Trainers ein
                lebendiger Rhythmus. Aus mehreren leichten Bausteinen entwickelt
                sich ein überraschend komplexes und doch einfaches Arrangement.
                Gemeinsamer Puls und Rhythmus machen nonverbal und intuitiv
                Teamtraining erlebbar. Das Bauen eigener Instrumente zum
                Beispiel Cajons können das Training ergänzen.
              </p>
              <h3>Was wird benötigt?</h3>
              <p>
                Drum UP Teamtrainings und Events sind flexibel was
                Teilnehmerzahl, Zeit, Raum und Größe angeht. Es ist ohne
                Vorkenntnisse der Beteiligten durchführbar.
              </p>
              <h3>Was ist das Ziel?</h3>

              <p>
                Drum Up Teamtrainings fördern Teamfähigkeiten / Soft Skills wie
              </p>
              <ul className="bullet">
                <li>Kreativität</li>
                <li>
                  Kommunikative Kompetenz – zuhören, miteinander kommunizieren
                </li>
                <li>
                  Empathie – seine Rolle finden, dem anderen Raum lassen,
                  individuelle Stärken förden
                </li>
                <li>Produktivität</li>
              </ul>

              <p>
                Diese sind immer automatisch Bestandteil einer Bandsituation.
                Durch die Sprache der Musik werden diese Begriffe nonverbal und
                sehr intuitiv erlebbar. Bestimmte Themen können während des
                Trainings herausgearbeitet, angesprochen, und damit bewusst
                gemacht werden. Drum UP arbeitet gerne mit Ihrem Teamtrainer,
                Organisator, Schulsozialarbeiter etc. vor Ort zusammen, um auf
                gewünschte Inhalte eingehen zu können.
              </p>
            </div>
          </div>
          <Link className="btn-sideNav" to="/kontakt">
            Hol dir dein individuelles Angebot
          </Link>
        </div>

        {/* <div className="container section_content"></div> */}
      </div>
    </Layout>
  );
};

export default Teamtraining;
