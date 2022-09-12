import React from "react";
import { NavLink, Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <NavLink to="/reactToDoList">class based component</NavLink>
      <NavLink to="/Hooks">Hooks</NavLink>
    </div>
  );
}

export default Nav;
