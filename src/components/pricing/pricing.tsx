import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="main main--pricing" style={{ color: "black" }}>
      <h1 className="main__title">Cennik</h1>
      <hr />
      <div className="main__content">
        <p>Każda realizacja jest wyceniana indywidualnie w zależności od:</p>
        <ul>
          <li>rozmiaru powierzchni,</li>
          <li>rodzaju i poziomu zabrudzeń,</li>
          <li>dostępu do miejsca,</li>
          <li>zastosowanych środków i metod.</li>
        </ul>
        <p>
          Oferujemy <strong>darmową wycenę</strong> – wystarczy się z nami
          skontaktować.
        </p>
        <p>
          <Link className="button__link" to="/contact">
            Skontaktuj się z nami &gt;
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
