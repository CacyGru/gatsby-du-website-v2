import React from 'react';

function Preise() {
  return (
    <div className="preise">
      <h1>Preise</h1>
      <h4>Drum UP Schlagzeugunterricht</h4>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td>30 Min</td>
            <td>60 Min</td>
          </tr>
          <tr>
            <td>EINZELUNTERRICHT Schüler/Studenten</td>
            <td>72 €</td>
            <td>140 €</td>
          </tr>
          <tr>
            <td>EINZELUNTERRICHT Erwachsene</td>
            <td>85 €</td>
            <td>165 €</td>
          </tr>
        </tbody>
      </table>
      <h4>Gutschein ohne Vertragsbindung</h4>
      <table>
        <tbody>
          <tr>
            <td>Gutschein S 4x30 Minuten</td>

            <td>96 €</td>
          </tr>
          <tr>
            <td>Gutschein L 4x60 Minuten</td>

            <td>180 €</td>
          </tr>
          <tr>
            <td>Gutschein 2er XL 2x90 Minuten</td>

            <td>140 €</td>
          </tr>
          <tr>
            <td>Gutschein 4er XL 4x90 Minuten</td>

            <td>270 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Preise;
