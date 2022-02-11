import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Transitions.css";

const Transition04 = () => {
  const [items, setItems] = useState(["🍏 Apple", "🍌 Banana"]);

  const FRUITS = [
    "🍏 Apple",
    "🍌 Banana",
    "🍍 Pineapple",
    "🥥 Coconut",
    "🍉 Watermelon",
    "🍓 Strawberry",
    "🍈 Melon",
    "🥝 Kiwi",
    "🍒 Cherry",
    "🍑 Peach",
  ];

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !items.includes(i));
    if (nextHiddenItem) {
      setItems((prev) => [...prev, nextHiddenItem]);
    }
  };

  const transitionendEvent = (node, done) => {
    node.addEventListener("transitionend", done, false);
  };
  return (
    <div>
      <TransitionGroup>
        <h2 className="text-center">Shopping List</h2>
        <div class="list-group w-25 mx-auto btn-group">
          {items.map((item, index) => (
            <CSSTransition
              key={index}
              timeout={500}
              classNames="example"
              addEndListener={transitionendEvent}
            >
              <a
                href="#"
                className="list-group-item list-group-item-action"
                aria-current="true"
              >
                {item}
              </a>
            </CSSTransition>
          ))}
          <button class="btn btn-dark rounded-0" onClick={handleAddFruit}>
            Add Fruit
          </button>
        </div>
      </TransitionGroup>
    </div>
  );
};

export default Transition04;
