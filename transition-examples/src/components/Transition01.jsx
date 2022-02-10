import { useState } from "react";
import { Transition } from "react-transition-group";

const Transition01 = () => {
  const duration = 1000;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  };

  const [inProp, setInProp] = useState(false);

  return (
    <div className="text-center">
      <button
        className="btn btn-primary mb-4"
        onClick={() => setInProp(!inProp)}
      >
        Click to Show
      </button>
      <Transition in={inProp} timeout={300}>
        {(state) => (
          <div
            className="alert alert-success"
            role="alert"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Transition01;
