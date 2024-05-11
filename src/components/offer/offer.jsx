import React from "react";
import { Link } from "react-router-dom";

const Offer = props => {
  const addition = (
    <p>
      Jeżeli na powyższej liście nie znalazłeś tego czego szukasz sprawdź{" "}
      <Link
        className="button__link"
        key={props.pages[4].path}
        to={props.pages[4].path}
      >
        listę najczęstszych pytań
      </Link>
      , lub{" "}
      <Link
        className="button__link"
        key={props.pages[2].path}
        to={props.pages[2].path}
      >
        skontaktuj się z nami!
      </Link>
    </p>
  );

  return (
    <div className="main main--offer" style={{color: "black"}}>
      <h1 className="main__title">Nasza oferta</h1>
      <hr />
      <div className="main__content">
        <h3>Hydropiaskowanie</h3>
        <p>
          Nasze usługi hydropiaskarskie polegają na profesjonalnym oczyszczaniu
          powierzchni w bezpieczny i niewymagający drogich zabezpieczeń sposób.
        </p>
        <br />
        <p>Lista powierzchni jakie czyścimy za pomocą hydropiaskowania:</p>
        <ul>
          <li>Elewacje</li>
          <li>Cegła</li>
          <li>Kamień</li>
          <li>Beton</li>
          <li>Stal</li>
        </ul>

        <h3>Mycie karcherem</h3>
        <p>
          Wykonujemy profesjonalne usługi mycia i czyszczenia elewacji metodą
          ciśnieniową hydrodynamiczną, potocznie określaną myciem karcherem.
        </p>
        <br />
        <p>Lista usług z wykożystaniem karchera:</p>
        <ul>
          <li>
            <p>Czyszczenia elewacji</p>
            <p>Rodzaje elewacji które czyścimy:</p>
            <ul>
              <li>
                Tynk (szlachetne, tradycyjne, malowane farbami elewacyjnymi,
                mineralne, cementowo-wapienne, akrylowe, silikatowe, silikonowe)
              </li>
              <li>
                Cegła, kamień, piaskowiec, klinkier, granit, tynki mozaikowe
              </li>
              <li>PCV</li>
              <li>Metalowe</li>
              <li>Betonowe</li>
              <li>Okładziny elewacyjne</li>
              <li>Powierzchnie pokryte powłokami antykorozyjnymi</li>
              <li>Ekrany akustyczne</li>
            </ul>
          </li>

          <li>
            <p>Mycie i czyszczenie dachów</p>
            <p>Rodzaje powierzchni którymi się zajmujemy:</p>
            <ul>
              <li>Dachówka</li>
              <li>Blachodachówka</li>
              <li>Stal</li>
              <li>Szkło</li>
            </ul>
          </li>
          <li>
            <p>Czyszczenia kostki</p>
            <p>
              Czyścimy wszelkie rodzaje kostki brukowej. Posiadamy urządzenia
              potrafiące w szybki i bezpieczny sposób umyć sporą powierzchnię.
            </p>
          </li>
          <li>
            <p>Czyszczenie paneli fotowoltaicznych i solarnych.</p>
          </li>
        </ul>
        {addition}
      </div>
    </div>
  );
};

export default Offer;
