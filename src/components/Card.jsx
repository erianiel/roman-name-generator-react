import { IoCopyOutline, IoTrashOutline } from "react-icons/io5";
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
          <IoCopyOutline color="#777" size="1.8rem" />
          <IoTrashOutline color="#a1321e" size="1.8rem" />
        </div>
      </div>
    </div>
  );
}

export default Card;
