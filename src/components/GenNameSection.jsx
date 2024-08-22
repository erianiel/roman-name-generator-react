import { useNames } from "../contexts/NamesContext.jsx";

import Form from "./FormGen.jsx";
import NameContent from "./NameContent.jsx";
import styles from "./GenNameSection.module.css";

function GenNameSection() {
  const { fullName } = useNames();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Create your <span className={styles.highlight}>realistic</span> <br />
        Ancient Roman <span className={styles.highlight}>name!</span>
      </h1>

      <Form />
      {fullName && <NameContent />}
    </div>
  );
}

export default GenNameSection;
