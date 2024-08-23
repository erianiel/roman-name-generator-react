import { Link, NavLink } from "react-router-dom";

import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h1>Roman name generator</h1>
      </Link>

      <ul>
        <li>
          <NavLink to="/howitworks">How it works</NavLink>
        </li>
        <li>
          <a href="https://github.com/erianiel" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
