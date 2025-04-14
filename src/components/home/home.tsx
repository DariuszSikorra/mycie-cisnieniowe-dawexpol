import { Link } from "react-router-dom";
import "./home.scss";
import CleanImage from "../../assets/images/438125044_935833158553962_1945687870856661188_n.jpg";
import CleanImage2 from "../../assets/images/438089822_1104436250852636_957264799924397053_n.jpg";

const Home = () => {
  return (
    <div className="main main--home" style={{ color: "black" }}>
      <h1 className="main__title">O nas</h1>
      <hr />
      <div className="main__content">
        <h3>Dawex-POL – Profesjonalne czyszczenie powierzchni</h3>
        <div className="content__textWithPhoto">
          <p>
            Dawex-POL to lokalna firma z Pomorza, która specjalizuje się w
            kompleksowym czyszczeniu powierzchni zewnętrznych. Z pasją dbamy o
            estetykę kostki brukowej, elewacji, tarasów i ogrodzeń. Pracujemy
            profesjonalnym sprzętem, korzystamy z wysokiej jakości,
            ekologicznych środków i dostosowujemy metody do konkretnego rodzaju
            zabrudzenia.
          </p>
          <img src={CleanImage} alt="Zespół Dawex-POL" />
        </div>
        <div className="content__textWithPhoto">
          <img src={CleanImage2} alt="Czyszczenie powierzchni" />
          <p>
            Naszą misją jest przywracanie czystości i estetyki Twojemu
            otoczeniu. Obsługujemy zarówno klientów indywidualnych, jak i firmy,
            oferując skuteczne rozwiązania czyszczące dopasowane do każdej
            powierzchni.
          </p>
        </div>
        <p>
          Zobacz, co oferujemy w naszej{" "}
          <Link to="/uslugi" className="button__link">
            ofercie usług&nbsp;&gt;
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
