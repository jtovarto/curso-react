import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Transitions.css";

const Transition02 = () => {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="text-center">
      <button
        className="btn btn-primary mb-4"
        onClick={() => setShowMessage(!showMessage)}
      >
        Show Message
      </button>
      <CSSTransition
        in={showMessage}
        timeout={1000}
        classNames="example"
        unmountOnExit
      >
        <div
          className="alert alert-success d-flex align-items-center"
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
          >
            <use xlinkHref="#check-circle-fill" />
          </svg>
          <div>Exits to the left</div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showMessage}
        timeout={1000}
        classNames="example2"
        unmountOnExit
      >
        <div
          className="alert alert-info d-flex align-items-center w-50 translate"
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
          >
            <use xlinkHref="#check-circle-fill" />
          </svg>
          <div>Exits to the right</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Transition02;
