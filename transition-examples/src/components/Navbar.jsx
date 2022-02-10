import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          Transition
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/ccs-transition" className="nav-link">
          CSSTransition
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/switch-transition" className="nav-link">
          SwitchTransition
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/transition-group" className="nav-link">
          TransitionGroup
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
