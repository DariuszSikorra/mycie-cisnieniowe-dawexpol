import { useState } from "react";
import Answer from "./answer";
import QuestionSign from "./questionSign";
import "./questionForm.scss";

const questionsAndAnswers = [
  {
    id: 0,
    question: "Lepiej czyścić chemicznie czy piaskować?",
    answer:
      "Przy większych powierzchniach polecamy skożystać z usług hydropiaskarskich, z powodu różnicy w prędkośći wykonywania usługi. Przy mniejszych powierzchniach oferujemy sprawdzenie efektów na małym fragmencie powierzchni i osobisty wybór rozwiązania.",
    visibility: false,
  },
  {
    id: 1,
    question:
      "W jaki sposób zostają zabezpieczone obiekty obok powierzchni piaskowanych/mytych karcherem?",
    answer:
      "Piorytetem w naszych pracach jest zadowolenie klienta, dlatego wszystkie obiekty (okna, drzwi, rynny itp.) które mogą ulec uszkodzeniu zostają zabezpieczone. W przymadku hydropiaskowania w miejscach publicznych dodatkowo zabezpieczamy okolicę za pomocą taśm.",
    visibility: false,
  },
  {
    id: 2,
    question: "Czy także impregnujecie piaskowane rzeczy?",
    answer:
      "Tak, ponieważ wiemy że niektóre powierzchnie powinny być zaimpregnowane natychmiastowo po wypiaskowaniu.",
    visibility: false,
  },
  {
    id: 3,
    question:
      "Do jakich mediów jest potrzebny dostęp podczas wykonywania usługi?",
    answer:
      "Podczas mycia karcherem potrzebujemy dostępu do wody bierzącej, lub jakiegoś zbiornika wodnego (ponieważ pobór wody jest duży).",
    visibility: false,
  },
];

const QuestionsForm = () => {
  const [qAA, setQAA] = useState(questionsAndAnswers);

  const handleClick = (props) => {
    const newQAA = qAA.map((question) => {
      if (question.id === props.id) {
        question.visibility = !question.visibility;
      }
      return question;
    });
    setQAA(newQAA);
  };

  return (
    <div className="main main--questionsForm" style={{ color: "black" }}>
      <h1 className="main__title">Najczęstsze pytania</h1>
      <hr />
      <div className="main__content">
        <div className="content__questionBox">
          {qAA.map((qaa) => (
            <div key={qaa.id}>
              <div
                className="questionBox__question"
                onClick={() => handleClick(qaa)}
              >
                <p style={{ position: "relative" }}>
                  <QuestionSign visibility={qaa.visibility} />
                  <span className="question__text">{qaa.question}</span>
                </p>
              </div>
              <Answer
                key={qaa.id}
                visibility={qaa.visibility}
                answer={qaa.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default QuestionsForm;
