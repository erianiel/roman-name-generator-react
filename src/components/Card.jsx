import { IoCopyOutline, IoTrashOutline } from "react-icons/io5";
import Button from "./Button.jsx";
import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <h2>Marcus Tullius Cicero</h2>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>male</p>
          <p>citizen</p>
        </div>
        <div className={styles.actions}>
          <Button type="action">
            <IoCopyOutline color="#777" size="1.8rem" />
          </Button>
          <Button type="action">
            <IoTrashOutline color="#a1321e" size="1.8rem" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
