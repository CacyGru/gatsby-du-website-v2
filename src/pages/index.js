import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import '../style/Home.scss';
import { FaDrum, FaMusic } from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';
import { BsFileRichtext } from 'react-icons/bs';
import { RiTapeLine } from 'react-icons/ri';
import cgdesktop from '../images/carsten-grüter-desktop.jpg';
import cgmobile from '../images/carsten-grüter-mobile.jpg';
import cg from '../images/cg.png';
/* import ButtonNeon from '../components/ButtonNeon'; */

/* import CTAButton from '../components/CTAButton';
import Button2 from '../components/Button2';
import ButtonLight from '../components/Buttonlight'; */

const Home = () => {
  return (
    <Layout>
      <Seo
        title="Home"
        description="Drum UP - Schlagzeugunterricht in Mönchengladbach für alle Altersklassen und Level. Drum UP - Teamtraining Bringen Sie ihr Team in Schwung!"
      />
      <h1 className="topDown">
        <span className="h1Plus du">Drum UP - </span>
        <span className="h1Plus">
          Entdecke die <span className="underline">Musik</span> in dir!
        </span>
      </h1>

      <div className="cards">
        <div className="card card-start">
          <div className="card-top">
            <h2>
              <FaDrum /> Unterricht
            </h2>
          </div>

          <div className="card-content">
            <div>
              <h3>
                Ob Anfänger oder Profi, ich bringe dein Trommeln auf ein neues
                Level.
              </h3>
              <p>
                Über 20 Jahre Erfahrung mit Musik, Menschen und Unterricht
                helfen mir, für jeden ein individuelles Konzept zu entwickeln.
              </p>
            </div>
          </div>
          <Link to="/unterricht" className="btn-sideNav">
            zum Angebot
          </Link>
        </div>

        <div className="card card-start">
          <div className="card-top">
            <h2>
              <AiOutlineTeam /> Teamtraining
            </h2>
          </div>
          <div className="card-content">
            <h3>
              Du kannst gar nicht trommeln?<br></br> Ich beweise dir das
              Gegenteil!<br></br>
            </h3>
            <p>
              Drum UP Teamtraining nutzt Energie und Prozesse einer (Trommel-)
              Band, um mit Mitarbeitern, Kunden, Gästen, Kindern, Schülern oder
              Vereinsmitgliedern ein kraftvolles Erlebnis zu erschaffen.
            </p>
          </div>
          <Link to="/teamtraining" className="btn-sideNav">
            probiere es aus
          </Link>
        </div>

        <div className="card card-start">
          <div className="card-top">
            <h2>
              <BsFileRichtext /> Drum UP
            </h2>
          </div>
          <div className="card-content">
            <figure>
              <picture>
                <source srcSet={cgmobile} />
                <source srcSet={cgdesktop} />
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

            <p>Wer ist eigentlich Drum Up?</p>
          </div>
          <Link to="/uebermich" className="btn-sideNav">
            über mich
          </Link>
        </div>

        <div className="card card-start">
          <div className="card-top">
            <h2>
              <FaMusic /> Musik
            </h2>
          </div>
          <div className="card-content">
            <p>Drum UP macht auch aktiv Musik.</p>
          </div>
          <Link to="/music" className="btn-sideNav">
            zur Musik
          </Link>
        </div>

        <div className="card card-start">
          <div className="card-top">
            <h2>
              <RiTapeLine /> Recording
            </h2>
          </div>
          <div className="card-content">
            <p>Musik für die Ewigkeit - Drum UP Recording und Produktion</p>
          </div>
          <Link to="/recording" className="btn-sideNav">
            zum Angebot
          </Link>
        </div>
      </div>

      {/*  <ButtonNeon to="/" text="kauf mich" /> */}
      {/* <div className="card1">
          <div className="card__content">
            <div className="card__front">
              <h3 className="card__title">The Fair</h3>
              <p className="card__subtitle">Time for some fun</p>
            </div>

            <div className="card__back">
              <p className="card__body">
                This would be some longer text that gives a description of the
                things from the other side I guess
              </p>
            </div>
          </div>
        </div> */}
    </Layout>
  );
};

export default Home;
