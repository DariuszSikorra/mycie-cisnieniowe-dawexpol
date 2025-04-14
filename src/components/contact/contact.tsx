import "./contact.scss";

const Contact = () => {
  return (
    <div className="main main--contact" style={{ color: "black" }}>
      <h1 className="main__title">Kontakt</h1>
      <hr />
      <div className="main__content">
        <p>
          Nasza firma świadczy usługi na terenie województwa pomorskiego i
          okolic. Ze względu na mobilny charakter działalności prosimy o
          kontakt:
        </p>
        <div className="content__contactBox">
          <div className="contactBox__item1">Telefon:</div>
          <div className="contactBox__item2">+48 729 534 719</div>
          <div className="contactBox__item3">E-mail:</div>
          <div className="contactBox__item4">dawexpolpiaskowanie@gmail.com</div>
        </div>
        <p>Sprawdź nas również na Facebooku:</p>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/Dawex-POL-Hyrdopiaskowanie-102353551176728/"
          data-width=""
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/Dawex-POL-Hyrdopiaskowanie-102353551176728/"
            className="fb-xfbml-parse-ignore"
          >
            <a
              href="https://www.facebook.com/Dawex-POL-Hyrdopiaskowanie-102353551176728/"
              target="_blank"
            >
              Dawex-POL Mycie kostki i elewacji
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Contact;
