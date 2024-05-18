import React from "react";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="main main--contact" style={{ color: "black " }}>
      <h1 className="main__title">Kontakt</h1>
      <hr />
      <div className="main__content">
        Nasza firma prowadzi prace na terenie województwa Pomorsiego i okolic.
        <br />
        <br />
        Ze względu na mobilny charakter prac prosimy o kontakt <br />
        telefoniczny lub mailowy: <br />
        <br />
        <div className="content__contactkBox">
          <div className="contactkBox__item1">Tel:</div>
          <div className="contactkBox__item2">
            <ul style={{listStyle: "none"}}>
              <li>+48 729 534 719</li>
              <li>+48 798 450 170</li>
            </ul>
          </div>
          <div className="contactkBox__item3">E-mail:</div>
          <div className="contactkBox__item4">
            dawexpolpiaskowanie@gmail.com
          </div>
        </div>
        <p>Sprawdź nas także na Facebook'u:</p>
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
            <a href="https://www.facebook.com/Dawex-POL-Hyrdopiaskowanie-102353551176728/">
              Dawex-POL Hyrdopiaskowanie
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Contact;
