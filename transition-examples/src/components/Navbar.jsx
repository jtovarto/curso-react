import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Transition
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/ccs-transition"
          className="nav-link"
          activeClassName="active"
        >
          CSSTransition
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/switch-transition"
          className="nav-link"
          activeClassName="active"
        >
          SwitchTransition
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/transition-group"
          className="nav-link"
          activeClassName="active"
        >
          TransitionGroup
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
