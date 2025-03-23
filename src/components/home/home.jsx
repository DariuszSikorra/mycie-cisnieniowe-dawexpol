import React from "react";
import { Link } from "react-router-dom";
import CleanImage from "../../assets/images/438125044_935833158553962_1945687870856661188_n.jpg";
import CleanImage2 from "../../assets/images/438089822_1104436250852636_957264799924397053_n.jpg";
import CleanImage3 from "../../assets/images/438064978_1001987594929112_7955168384531912098_n.jpg";

import "./home.scss";

const Home = (props) => {
  return (
    <div className="main main--home" style={{ color: "black" }}>
      <h1 className="main__title">Dawex-POL</h1>
      <hr />
      <div className="main__content">
        <h3>Witamy na stronie naszej firmy sprzątającej!</h3>
        <div className="content__textWithPhoto">
          <p>
            Jesteśmy dumni, że możemy zaoferować Państwu kompleksowe usługi
            czyszczenia powierzchni zewnętrznych. Nasza firma specjalizuje się w
            przywracaniu czystości i estetyki kostki brukowej, elewacji oraz
            innych powierzchni wokół Państwa domu i firmy.
          </p>
          <img src={CleanImage} alt="home1" />
        </div>
        <h3>O Nas</h3>
        <div className="content__textWithPhoto">
          <img src={CleanImage2} alt="home1" />
          <p>
            Jeśli cieszy cię czysta powierzchnia wokół swojego domu, zadbamy,
            aby Twoja kostka brukowa, elewacja znów wyglądała czysto i
            estetycznie. Posiadamy specjalistyczny, markowy sprzęt oraz
            odpowiednie preparaty, dzięki którym usuniemy wszelakie zabrudzenia
            z Twojej kostki brukowej, elewacji, ogrodzenia. Nie straszny nam
            mech, porosty, trawa, usuniemy nawet najtrwalsze zabrudzenia, które
            przez lata nie pozwalały o sobie zapomnieć.
          </p>
        </div>
        <h3>Nasze Usługi</h3>
        <div className="content__textWithPhoto">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>
              Oferujemy szeroki zakres usług, które spełnią oczekiwania nawet
              najbardziej wymagających klientów. W naszej ofercie znajdziesz:
            </p>
            <ul>
              <li>Czyszczenie Kostki Brukowej</li>
              <li>Impregnacja Kostki Brukowej</li>
              <li>Mycie Elewacji</li>
              <li>Czyszczenie Tarasów</li>
              <li>Mycie Wiat</li>
              <li>Czyszczenie Hal Produkcyjnych i Magazynowych</li>
              <li>Mycie Płotów i Ogrodzeń</li>
              <li>Czyszczenie Garaży</li>
              <li>Odgrzybianie</li>
            </ul>
            <p>
              Nasze myjki spalinowe z podgrzewaniem wody do 95°C skutecznie
              usuną wszelkie zabrudzenia, pozostawiając powierzchnie
              nieskazitelnie czyste.
            </p>
          </div>

          <img src={CleanImage3} alt="home1" />
        </div>
        <h3>Kontakt</h3>
        <div
          className="content__textWithPhoto"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p>
            Zapraszamy do kontaktu! Oferujemy darmową wycenę, dzięki czemu
            możesz z łatwością zaplanować swój budżet. Skontaktuj się z nami,
            aby dowiedzieć się więcej o naszych usługach i umówić się na wizytę.
          </p>
          <p>
            Telefon:
            <ul style={{ listStyle: "none" }}>
              <li>+48 729 534 719</li>
            </ul>
            Serdecznie zapraszam, Krzysztof
          </p>
        </div>
        <p>
          Zobacz więcej zdjęć w naszej{" "}
          <Link
            className="button__link"
            key={props.pages[2].path}
            to={props.pages[2].path}
          >
            galerii!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
