import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Button from "./Button";

import styles from "./PageNav.module.css";

function PageNav() {
  const isMobile = useMediaQuery("(max-width: 67em");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h1>Roman name generator</h1>
      </Link>

      {isMobile && (
        <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="secondary">
          {!isMenuOpen ? (
            <IoMenuOutline size="3.2rem" />
          ) : (
            <IoCloseOutline size="3.2rem" />
          )}
        </Button>
      )}

      <ul
        className={`${styles.list} ${
          isMobile && !isMenuOpen ? "hidden" : styles.navOpen
        }`}
      >
        <li>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/howitworks" onClick={() => setIsMenuOpen(false)}>
            How it works
          </NavLink>
        </li>
        <li>
          <a
            href="https://github.com/erianiel"
            onClick={() => setIsMenuOpen(false)}
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
