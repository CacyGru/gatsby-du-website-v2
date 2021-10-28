import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import '../style/recording.scss';
import { RiTapeLine } from 'react-icons/ri';

const Recording = () => {
  return (
    <Layout>
      <Seo title="Recording/Produktion" />
      <div className=" flex recording">
        <div className="card-left">
          <h2>
            <RiTapeLine /> Recording / Produktion
          </h2>
        </div>
        <div className="card-right">
          <h2>Drum UP - Recording</h2>
          <p>
            {' '}
            Als zertifizierter Audio Engineer nehme ich immer wieder bei
            verschiedensten Gelegenheiten auf. Sei es das Hörspiel eines
            Grundschul Ferienprojektes, ein Orchester- oder Bigband Konzert, das
            Demo einer Schülerband, eine Weihnachts CD für den Opa ...{' '}
          </p>
          <ul className="bullet">
            <li>Schlagzeug Aufnahmen</li>
            <li>Hörspiele</li>
            <li>Hörbuch</li>
            <li>Dein Playback</li>
            <li>Hochzeitsüberraschung</li>
            <li>Dein Song als Geschenk</li>
            <li>Karaoke Junggesellenabschied</li>
          </ul>
          <p>- alles ist möglich! -</p>
          <h2>Drum UP - Musik Produktion</h2>
          <p>
            Produktionen für Firmen- und Messe Events waren genauso dabei, wie
            das Geburtstagsgeschenk für den Papa mit Karaoke Versionen der
            Lieblings Songs.
          </p>
          Equipment u.a.:
          <ul className="bullet">
            <li>Hedd Type 07 MK2</li>
            <li>Yamaha HS 8</li>
            <li>Yamaha HS 8S</li>
            <li>Yamaha 01v96i</li>
            <li>Neumann TLM 102</li>
            <li>Neumann KM 184</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Recording;
