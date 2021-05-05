import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import '../style/Home.scss';
import { FaDrum } from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';
import ButtonNeon from '../components/ButtonNeon';

/* import CTAButton from '../components/CTAButton';
import Button2 from '../components/Button2';
import ButtonLight from '../components/Buttonlight'; */

const Home = () => {
  return (
    <Layout>
      <div className="content center">
        <Seo title="Home" description="andere beschreibung" />
        <h1>
          Du kannst gar nicht trommeln? <br></br>{' '}
          <span className="h1Plus">
            Drum Up beweist dir das{' '}
            <span className="underline">Gegenteil!</span>
          </span>
        </h1>

        <ButtonNeon to="/" text="kauf mich" />

        <div className="cards">
          <Link to="/unterricht" className="home">
            <div className="card card-hover">
              <div className="card-top">
                <h2>
                  <FaDrum /> Unterricht
                </h2>
              </div>
              <div className="card-content">
                <p>
                  Ob Anfänger oder Profi, ich bringe dein Trommeln auf ein neues{' '}
                  Level.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/teamtraining" className="home">
            <div className="card card-hover">
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
            </div>
          </Link>
        </div>

        <div className="card1">
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
        </div>
      </div>
    </Layout>
  );
};

export default Home;
