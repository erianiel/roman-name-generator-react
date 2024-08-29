import {
  IoTrashOutline,
  IoChevronDownOutline,
  IoChevronUpOutline,
} from "react-icons/io5";
import { useState } from "react";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import styles from "./Sidebar.module.css";
import { useNames } from "../contexts/NamesContext.jsx";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";

function Sidebar() {
  const { people, setPeople } = useNames();
  const isMobile = useMediaQuery("(max-width: 67em");
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={`${styles.container} ${!people.length && styles.hidden}`}>
      {isMobile && (
        <Button onClick={() => setIsClicked(!isClicked)} type="action">
          Show generated names{" "}
          {!isClicked ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
        </Button>
      )}
      {!people.length ||
        (isClicked && (
          <>
            <Button onClick={() => setPeople([])} type="action">
              <IoTrashOutline size="2.4rem" />
              Delete All
            </Button>

            <div
              className={`${styles.namesBox} ${
                people.length > 5 && styles.scroll
              }`}
            >
              {people.map((person, i) => (
                <Card key={i} person={person} />
              ))}
            </div>
          </>
        ))}
    </div>
  );
}

export default Sidebar;
