import React from "react";
import "./NavigationPanel.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavigationPanel({ links }) {
  const linksList = links.map(link => (
    <li className="NavigationPanel__item" key={`${link.path}`}>
      <Link className="NavigationPanel__link" to={link.path}>
        {link.name}
      </Link>
    </li>
  ));
  return (
    <nav className="NavigationPanel">
      <ul className="NavigationPanel__list">{linksList}</ul>
    </nav>
  );
}
NavigationPanel.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired
};
