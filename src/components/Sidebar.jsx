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
  const [showNames, setShowNames] = useState(false);

  function deletePerson(id) {
    setPeople(people.filter((p) => p.id !== id));
  }

  return (
    <div className={`${styles.container} ${!people.length && "hidden"}`}>
      {isMobile && (
        <Button onClick={() => setShowNames(!showNames)} variant="tertiary">
          Show generated names
          {!showNames ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
        </Button>
      )}

      <div
        className={`${styles.gap} ${isMobile && !showNames && styles.hidden}`}
      >
        <Button onClick={() => setPeople([])} variant="secondary">
          <IoTrashOutline size="2.4rem" />
          Delete All
        </Button>

        <div
          className={`${styles.namesBox} ${
            !isMobile && people.length > 5 && styles.scroll
          }`}
        >
          {people.map((person) => (
            <Card key={person.id} person={person} handleDelete={deletePerson} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
