import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Datenschutz = () => {
  return (
    <Layout>
      <Seo title="Datenschutz" />

      <div className="flex" id="datenschutz">
        <div className="card-top">
          <h2>Datenschutz&shy;erkl&auml;rung</h2>
        </div>
        <div className="card-content flex">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>

          <p>
            Die folgenden Hinweise geben einen einfachen &Uuml;berblick
            dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
            Sie diese Website besuchen. Personenbezogene Daten sind alle Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
            Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
            unserer unter diesem Text aufgef&uuml;hrten
            Datenschutzerkl&auml;rung.
          </p>
          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>
              Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
              Website?
            </strong>
          </p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum
            dieser Website entnehmen.
          </p>
          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong>
          </p>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
            in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
            allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
            oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
            automatisch, sobald Sie diese Website betreten.
          </p>
          <p>
            <strong>Wof&uuml;r nutzen wir Ihre Daten?</strong>
          </p>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
            Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
          <p>
            <strong>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</strong>
          </p>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
            Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
            Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
            verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
            haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die
            Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter
            bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
            ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
            zu.
          </p>
          <p>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen
            Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns
            wenden.
          </p>
          <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3>
          <p>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit sogenannten
            Analyseprogrammen.
          </p>
          <p>
            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
            der folgenden Datenschutzerkl&auml;rung.
          </p>

          <h3>Nutzung der Jitsi meet Instanz online.drum-up.de</h3>

          <p>
            Mit der Open-Source-Software Jitsi Meet können Webkonferenzen
            durchgeführt werden. Der verwendete Server für meine Jitsi Meet
            Instanz wird durch den Anbieter IONOS betrieben. Mit diesem Anbieter
            wurde ein Vertrag zur Auftragsverarbeitung über die Verarbeitung von
            Personenstammdaten, Kommunikationsdaten (z.B. Telefon, E-Mail),
            Protokolldaten und Audio- und Videodaten geschlossen.
            <br />
            Ich habe die Installation entsprechend angepasst, damit keine Daten
            gespeichert werden. Standardmäßig wird Jitsi Meet mit der
            Einstellung für die Protokollierung auf INFO konfiguriert. Da hier
            die IP-Adressen gespeichert werden, habe ich die Einstellung auf
            WARNING angepasst. Damit werden im normalen Betrieb keine
            Protokolleinträge erstellt.
            <br />
            <br />
            .level=WARNING
            <br />
            <br />
            Die Protokollierung des Webserver NGINX wurden mit den folgenden
            Einträgen komplett deaktiviert:
            <br />
            <br />
            access_log off; error_log off;
            <br />
            <br />
            Mit Jitsi Meet werden auf Basis von WebRTC Daten bzw. Media-Streams
            via Datagram Transport Layer Security (DTLS) und Secure Real-time
            Transport Protocol (SRTP) verschlüsselt übertragen. WebRTC bietet
            allerdings (noch) keine Möglichkeit, Videochats mit mehreren
            Personen Ende-zu-Ende zu verschlüsseln. Das bedeutet: Auf dem
            Transportweg bzw. im Netzwerk ist der Videochat verschlüsselt, auf
            dem Videochat-Server hingegen, der Jitsi Meet hostet, wird der
            gesamte Datenverkehr entschlüsselt und ist damit theoretisch für den
            Betreiber einsehbar. Als Betreiber speichere ich allerdings keine
            Informationen über Sie bzw. die Videochats. Es wird nichts
            protokolliert bzw. gespeichert / mitgeschnitten.
            <br />
            Wenn Sie an einer Jitsi Meet Webkonferenz teilnehmen, werden Sie zu
            Beginn des Meetings nach Ihrem Namen gefragt. Dieser Name wird für
            die Dauer Ihrer Teilnahme an dem jeweiligen Online-Meeting
            verarbeitet und anschließend gelöscht. Auch etwaige Audio-, Video-
            oder Chatinhalte werden nur während des jeweiligen Online-Meetings
            verarbeitet. Zusätzliche habe Sie eine Möglichkeit Ihre
            E-Mailadresse in den Einstellungen einzugeben. Normalerweise wird
            sie mit dem Dienst Gravatar verknüpft, um ein Benutzerbild
            anzuzeigen. Diese Funktion wurde auf meinem Server deaktiviert.
            Daher wird die E-Mailadresse für die Sitzung gespeichert aber nicht
            weiter verwendet.
          </p>
          <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
          <h3>Externes Hosting</h3>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet
            (Hoster). Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters gespeichert.
            Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta-
            und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
            Websitezugriffe und sonstige Daten, die &uuml;ber eine Website
            generiert werden, handeln.
          </p>
          <p>
            Der Einsatz des Hosters erfolgt zum Zwecke der
            Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und
            bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
            einer sicheren, schnellen und effizienten Bereitstellung unseres
            Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1
            lit. f DSGVO).
          </p>
          <p>
            Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
            Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere
            Weisungen in Bezug auf diese Daten befolgen.
          </p>
          <p>
            <strong>
              Abschluss eines Vertrages &uuml;ber Auftragsverarbeitung
            </strong>
          </p>
          <p>
            Um die datenschutzkonforme Verarbeitung zu gew&auml;hrleisten, haben
            wir einen Vertrag &uuml;ber Auftragsverarbeitung mit unserem Hoster
            geschlossen.
          </p>
          <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer
            pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerkl&auml;rung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die
            vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten
            wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch,
            wie und zu welchem Zweck das geschieht.
          </p>
          <p>
            Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
            (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
            aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem
            Zugriff durch Dritte ist nicht m&ouml;glich.
          </p>
          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p>
            Carsten Gr&uuml;ter
            <br />
            Ruhrtalstra&szlig;e 28
            <br />
            40233 D&uuml;sseldorf
          </p>

          <p>
            Telefon: +491702824929
            <br />
            E-Mail: info@drum-up.de
          </p>
          <p>
            Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
            Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
            und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B.
            Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
          </p>
          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
            ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
            bereits erteilte Einwilligung jederzeit widerrufen. Die
            Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
          </p>
          <h3>
            Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
            sowie gegen Direktwerbung (Art. 21 DSGVO)
          </h3>
          <p>
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
            ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
            GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN
            DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
            EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
            GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN
            EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
            DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
            IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
            SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE
            F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE
            UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER
            GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
            RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
          </p>
          <p>
            WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
            BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
            VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
            DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS
            PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
            WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
            ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
            (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
          </p>
          <h3>
            Beschwerde&shy;recht bei der zust&auml;ndigen
            Aufsichts&shy;beh&ouml;rde
          </h3>
          <p>
            Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
            Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
            insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
            Aufenthalts, ihres Arbeitsplatzes oder des Orts des
            mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
            unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
            Rechtsbehelfe.
          </p>
          <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
            sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
            Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
            &Uuml;bertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>
          <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
            &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
            Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
            senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
            verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von &bdquo;http://&ldquo; auf
            &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
          </p>
          <p>
            Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
            k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
            Dritten mitgelesen werden.
          </p>
          <h3>Auskunft, L&ouml;schung und Berichtigung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und
            Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
            Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie
            zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie
            sich jederzeit unter der im Impressum angegebenen Adresse an uns
            wenden.
          </p>
          <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>
          <p>
            Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in
            folgenden F&auml;llen:
          </p>
          <ul>
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
              Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
              der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten
              unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
              der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
              verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen,
              Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung
              von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht,
              statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung
              Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
              haben, muss eine Abw&auml;gung zwischen Ihren und unseren
              Interessen vorgenommen werden. Solange noch nicht feststeht,
              wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
              Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.
            </li>
          </ul>
          <p>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
            eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
            Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
            Geltendmachung, Aus&uuml;bung oder Verteidigung von
            Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
            nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
            eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
            Union oder eines Mitgliedstaats verarbeitet werden.
          </p>
          <h3>Widerspruch gegen Werbe-E-Mails</h3>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht
            ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von nicht
            ausdr&uuml;cklich angeforderter Werbung und Informationsmaterialien
            wird hiermit widersprochen. Die Betreiber der Seiten behalten sich
            ausdr&uuml;cklich rechtliche Schritte im Falle der unverlangten
            Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
          </p>
          <h2>4. Datenerfassung auf dieser Website</h2>
          <h3>Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;.
            Cookies sind kleine Textdateien und richten auf Ihrem Endger&auml;t
            keinen Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r
            die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente
            Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden
            nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente
            Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese
            selbst l&ouml;schen&nbsp;oder eine automatische L&ouml;schung durch
            Ihren Webbrowser erfolgt.
          </p>
          <p>
            Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem
            Endger&auml;t gespeichert werden, wenn Sie unsere Seite betreten
            (Third-Party-Cookies). Diese erm&ouml;glichen uns oder Ihnen die
            Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B.
            Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p>
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
            technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht
            funktionieren w&uuml;rden (z.B. die Warenkorbfunktion oder die
            Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten
            auszuwerten&nbsp;oder Werbung anzuzeigen.
          </p>
          <p>
            Cookies, die zur Durchf&uuml;hrung des elektronischen
            Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung
            bestimmter, von Ihnen erw&uuml;nschter Funktionen (funktionale
            Cookies, z. B. f&uuml;r die Warenkorbfunktion) oder zur Optimierung
            der Website (z.B. Cookies zur Messung des Webpublikums) erforderlich
            sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der
            Websitebetreiber hat ein berechtigtes Interesse an der Speicherung
            von Cookies zur technisch fehlerfreien und optimierten
            Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
            Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der
            betreffenden Cookies ausschlie&szlig;lich auf Grundlage dieser
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist
            jederzeit widerrufbar.
          </p>
          <p>
            Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das
            Setzen von Cookies informiert werden und Cookies nur im Einzelfall
            erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder
            generell ausschlie&szlig;en sowie das automatische L&ouml;schen der
            Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der
            Deaktivierung von Cookies kann die Funktionalit&auml;t dieser
            Website eingeschr&auml;nkt sein.
          </p>
          <p>
            Soweit Cookies von Drittunternehmen oder zu Analysezwecken
            eingesetzt werden, werden wir Sie hier&uuml;ber im Rahmen dieser
            Datenschutzerkl&auml;rung gesondert informieren und ggf. eine
            Einwilligung abfragen.
          </p>
          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns &uuml;bermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen.
          </p>
          <p>
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
            der technisch fehlerfreien Darstellung und der Optimierung seiner
            Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst
            werden.
          </p>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r
            den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines
            Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
            vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
            &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
            berechtigten Interesse an der effektiven Bearbeitung der an uns
            gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
            wurde.
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
            uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung
            entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer
            Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
            Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
          </p>
          <h2>5. Analyse-Tools und Werbung</h2>
          <h3>IONOS WebAnalytics</h3>
          <p>
            Diese Website nutzt die Analysedienste von IONOS WebAnalytics (im
            Folgenden: IONOS). Anbieter ist die 1&amp;1 IONOS SE, Elgendorfer
            Stra&szlig;e 57, D &ndash; 56410 Montabaur. Im Rahmen der Analysen
            mit IONOS k&ouml;nnen u. a. Besucherzahlen und &ndash;verhalten
            (z.&nbsp;B. Anzahl der Seitenaufrufe, Dauer eines Webseitenbesuchs,
            Absprungraten), Besucherquellen (d. h., von welcher Seite der
            Besucher kommt), Besucherstandorte sowie technische Daten (Browser-
            und Betriebssystemversionen) analysiert werden. Zu diesem Zweck
            speichert IONOS insbesondere folgende Daten:
          </p>
          <ul>
            <li>Referrer (zuvor besuchte Webseite)</li>
            <li>angeforderte Webseite oder Datei</li>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>verwendeter Ger&auml;tetyp</li>
            <li>Uhrzeit des Zugriffs</li>
            <li>
              IP-Adresse in anonymisierter Form (wird nur zur Feststellung des
              Orts des Zugriffs verwendet)
            </li>
          </ul>
          <p>
            Die Datenerfassung erfolgt laut IONOS vollst&auml;ndig anonymisiert,
            sodass sie nicht zu einzelnen Personen zur&uuml;ckverfolgt werden
            kann. Cookies werden von IONOS WebAnalytics nicht gespeichert.
          </p>
          <p>
            Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art.
            6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an der statistischen Analyse des Nutzerverhaltens, um
            sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern
            eine entsprechende Einwilligung abgefragt wurde, erfolgt die
            Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Weitere Informationen zur Datenerfassung und Verarbeitung durch
            IONOS WebAnalytics entnehmen Sie der Datenschutzerklärung von IONOS
            unter folgendem Link:
          </p>
          <p>
            <a
              href="https://www.ionos.de/terms-gtc/index.php?id=6"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ionos.de/terms-gtc/index.php?id=6
            </a>
          </p>
          <p>
            <strong>Auftragsverarbeitung</strong>
          </p>
          <p>
            Wir haben mit IONOS einen Vertrag zur Auftragsverarbeitung
            abgeschlossen. Dieser Vertrag soll den datenschutzkonformen Umgang
            mit Ihren personenbezogenen Daten durch IONOS sicherstellen.
          </p>
          <h2>6. Plugins und Tools</h2>
          <h3>Google Web Fonts</h3>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
            genannte Web Fonts, die von Google bereitgestellt werden. Die Google
            Fonts sind lokal installiert. Eine Verbindung zu Servern von Google
            findet dabei nicht statt.
          </p>
          <p>
            Weitere Informationen zu Google Web Fonts finden Sie unter
            <a
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developers.google.com/fonts/faq
            </a>
            und in der Datenschutzerkl&auml;rung von Google:
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
          <p>
            Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Datenschutz;
