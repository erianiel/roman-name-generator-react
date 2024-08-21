import { useNames } from "../contexts/NamesContext.jsx";
import styles from "./NameContent.module.css";

function NameInfo() {
  const { fullName, gender, status } = useNames();
  return (
    <div className={styles.container}>
      <h3>{fullName}</h3>
      <div className={styles.contentBox}>
        <div>
          <h2>{status}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div>
          <h2>{gender}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NameInfo;
