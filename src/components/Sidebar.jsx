import { IoTrashOutline } from "react-icons/io5";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import styles from "./Sidebar.module.css";
import { useNames } from "../contexts/NamesContext.jsx";

function Sidebar() {
  const { people, setPeople } = useNames();
  return (
    Boolean(people.length) && (
      <div className={styles.container}>
        <Button onClick={() => setPeople([])} type="action">
          <IoTrashOutline size="2.4rem" />
          Delete All
        </Button>

        <div
          className={`${styles.namesBox} ${people.length > 4 && styles.scroll}`}
        >
          {people.map((person, i) => (
            <Card key={i} person={person} />
          ))}
        </div>
      </div>
    )
  );
}

export default Sidebar;
