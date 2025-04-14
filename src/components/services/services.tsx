import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="main main--services" style={{ color: "black" }}>
      <h1 className="main__title">Nasze usługi</h1>
      <hr />
      <div className="main__content">
        <p>
          Oferujemy profesjonalne mycie powierzchni zewnętrznych z użyciem
          wysokociśnieniowych myjek z gorącą wodą (do 95°C). Usuwamy nawet
          najbardziej uporczywe zabrudzenia, przy użyciu środków bezpiecznych
          dla roślin, ludzi i środowiska.
        </p>
        <ul>
          <li>Mycie kostki brukowej, tarasów, chodników</li>
          <li>Mycie elewacji, ogrodzeń, wiat i garaży</li>
          <li>Czyszczenie hal przemysłowych, magazynów</li>
          <li>Odgrzybianie i usuwanie pleśni</li>
        </ul>
        <p>
          Po czyszczeniu oferujemy <strong>impregnację</strong> oraz opcjonalne
          <strong>malowanie nawierzchni</strong>.
        </p>
        <p>
          Świadczymy również usługi <strong>piaskowania</strong> – do
          powierzchni wymagających głębszego oczyszczenia.
        </p>
        <p>
          Sprawdź również:{" "}
          <Link className="button__link" to="/cennik">
            Cennik &gt;
          </Link>{" "}
          |{" "}
          <Link className="button__link" to="/gallery">
            Galeria &gt;
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Services;
