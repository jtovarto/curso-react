import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./Transitions.css";
import Form from "./Form";
import Welcome from "./Welcome";

const Transition03 = () => {
  const [state, setState] = useState(false);
  const [username, setUsername] = useState("");

  const transitionendEvent = (node, done) => {
    node.addEventListener("transitionend", done, false);
  };
  const switchKey = () => {
    return state ? "form" : "welcome";
  };

  return (
    <>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={state ? "form" : "welcome"}
          addEndListener={transitionendEvent}
          classNames="fade"
        >
          <div style={{ height: "300px" }}>
            {state ? (
              <Welcome username={username} />
            ) : (
              <Form login={setUsername} />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
      <div class="text-center mt-4">
        <button
          className="btn btn-primary shadow"
          onClick={() => setState((state) => !state)}
        >
          {state ? "Login in" : "Close session"}
        </button>
      </div>
    </>
  );
};

export default Transition03;
