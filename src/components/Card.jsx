import { IoCopyOutline, IoTrashOutline } from "react-icons/io5";
import Button from "./Button.jsx";
import styles from "./Card.module.css";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard.js";
import { useState } from "react";

function Card({ person }) {
  const [copiedText, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    setIsCopied(await copy(person.fullName));
    setTimeout(() => setIsCopied(false), 1500);
  }

  return (
    <div className={styles.card}>
      <h2>{person.fullName}</h2>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>{person.gender}</p>
          <p>{person.status}</p>
        </div>
        <div className={styles.actions}>
          {isCopied && <span className={styles.copied}>Copied!</span>}
          <Button onClick={() => handleCopy()} type="action">
            <IoCopyOutline color="#595959" size="1.8rem" />
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
