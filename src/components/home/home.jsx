import React from "react";
import { Link } from "react-router-dom";

import "./home.scss"

const Home = props => {
  return (
    <div className="main main--home" style={{color: "black"}}>
      <h1 className="main__title">Dawex-POL</h1>
      <hr />
      <div className="main__content">
        <h3>Czym się zajmujemy?</h3>
        <div className="content__textWithPhoto">
          <p>
            Nasz firma zajmuje się hydropiaskowaniem i myciem powierzchni
            karcherem z dojazdem do klienta. Posiadamy wyposażenie umożliwiające
            pracę w bezpiecznych warunkach, bez pylenia. Dzięki temu możemy
            pracować na zawnątrz jak i w pomieszczeniach zamkniętych.
          </p>
          <img
            src="https://i.ytimg.com/vi/u4bcSmm_R00/maxresdefault.jpg"
            alt="home1"
          />
        </div>
        <h3>Czym jest Hydropiaskowanie?</h3>
        <br />
        <div className="content__textWithPhoto">
          <img
            src="https://i.ytimg.com/vi/ywbLmPbqrkM/maxresdefault.jpg"
            alt="home2"
          />
          <p>
            Hydropiaskowanie jest jedną z metod czyszczenia- piaskowaniem na
            mokro. Ten sposób mycia powierzchni polecany jest zwłaszcza do
            usuwania trudnych zabrudzeń, na rozległych powierzchniach oraz
            starych zanieczyszczeń, które już zdążyły w dużym stopniu nadbudować
            się np. na elewacji budynku.
          </p>
        </div>
        <br />
        <p>
          O hydropiaskowaniu powszechnie wiadomo, że jest to najbardziej
          skuteczna metoda czyszczenia. Posiada jednak niezliczoną ilość zalet,
          decydujących o jej popularności:
        </p>
        <ol>
          <li>
            Dzięki hydropiaskowaniu można perfekcyjnie wyczyścić daną
            powierzchnię.
          </li>
          <li>
            Czyszczenie piaskowaniem na mokro nie wpływa negatywnie na
            środowisko naturalne, jest zatem metodą w pełni ekologiczną
            Hydropiaskowanie jest w pełni bezpieczne – nie powoduje zagrożenia
            dla zdrowia.
          </li>
          <li>
            Jedną z najkorzystniejszych finansowo metod jest właśnie metoda
            hydropiaskowania. Cena usługi jest bardzo przystępna Zastosowanie
            piaskowania na mokro pozwala wyczyścić różnego rodzaju powierzchnie.
            Można zatem w trakcie jednej wizyty fachowców umyć wiele materiałów
          </li>
        </ol>
        <br />
        <h3>
          Jakie powierzchnie można wyczyścić przy pomocy hydropiaskowania?
        </h3>
        <p>
          Zastosowanie metody piaskowania na mokro pozwoli pozbyć się wielu
          różnych zabrudzeń. Dzięki hydropiaskowaniu można pozbyć się
          nieestetycznego graffiti z murów, niepożądanych glonów występujących
          na elewacjach, szpecącej elementy metalowe rdzy, a także resztek farb
          i cementu pozostałych po remoncie.
        </p>
        <br />
        <p>
          Korzystając z usługi piaskowania na mokro, mamy gwarancję przywrócenia
          elewacji budynku do stanu niemalże nowości! Hydropiaskowanie świetnie
          sprawdzi się również w przypadku konieczności uprzątnięcia przestrzeni
          publicznej – doczyści ławki, fasady nieruchomości, asfalt, czy kostkę
          brukową. Metodę piaskowania na mokro można śmiało nazwać remedium na
          wszelkie plamy i zanieczyszczenia. Czyszczenie przy pomocy techniki
          hydropiaskowania jest doskonałe do zastosowania w przypadku
          konieczności uprzątnięcia rozległych powierzchni.
        </p>
        <br />
        <p>
          Dzięki piaskowaniu na mokro można idealnie wyczyścić takie materiały
          jak:
        </p>
        <ul>
          <li>cegła,</li>
          <li>kamień,</li>
          <li>beton,</li>
          <li>metal,</li>
          <li>piaskowiec,</li>
          <li>tworzywa sztuczne,</li>
          <li>drewno.</li>
        </ul>
        <p>
          Zobacz więcej w naszej{" "}
          <Link
            className="button__link"
            key={props.pages[3].path}
            to={props.pages[3].path}
          >
            galerii!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
