import { IoTrashOutline } from "react-icons/io5";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.container}>
      <Button type="action">
        <IoTrashOutline size="2.4rem" />
        Delete All
      </Button>
      <Card />
    </div>
  );
}

export default Sidebar;
