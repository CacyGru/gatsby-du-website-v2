import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import '../style/Home.scss';
import { FaDrum, FaMusic } from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';
/* import ButtonNeon from '../components/ButtonNeon'; */

/* import CTAButton from '../components/CTAButton';
import Button2 from '../components/Button2';
import ButtonLight from '../components/Buttonlight'; */

const Home = () => {
  return (
    <Layout>
      <div className="content center">
        <Seo
          title="Home"
          description="Drum UP - Schlagzeugunterricht in Mönchengladbach für alle Altersklassen und Level. Drum UP - Teamtraining Bringen Sie ihr Team in Schwung!"
        />
        <h1 className="topDown">
          <span className="h1Plus">
            Entdecke die <span className="underline">Musik</span> in dir!
          </span>
        </h1>

        <div className="cards">
          <div className="card card-hover home ">
            <div className="card-top">
              <h2>
                <FaDrum /> Unterricht
              </h2>
            </div>
            <div className="card-content">
              <div>
                <h3>
                  Du kannst gar nicht trommeln?<br></br> Ich beweise dir das
                  Gegenteil!<br></br>
                </h3>
                <br></br> Ob Anfänger oder Profi, ich bringe dein Trommeln auf
                ein neues Level.
              </div>
            </div>
            <Link to="/unterricht" className="btn-sideNav">
              zum Angebot ...
            </Link>
          </div>

          <div className="card card-hover home ">
            <div className="card-top">
              <h2>
                <AiOutlineTeam /> Teamtraining
              </h2>
            </div>
            <div className="card-content">
              <p>
                Drum UP Teamtraining nutzt Energie und gruppendynamische
                Prozesse einer (Trommel)Band, um mit Mitarbeitern, Kunden,
                Gästen, Kindern, Schülern oder Vereinsmitgliedern ein
                kraftvolles Erlebnis zu erschaffen.
              </p>
            </div>
            <Link to="/teamtraining" className="btn-sideNav">
              probiere es aus ...
            </Link>
          </div>

          <div className="card card-hover home ">
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
