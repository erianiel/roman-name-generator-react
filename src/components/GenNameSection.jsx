import styles from "./GenNameSection.module.css";

import Form from "./FormGen.jsx";
import NameContent from "./NameContent.jsx";

function GenNameSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Create your <span className={styles.highlight}>realistic</span> <br />
        Ancient Roman <span className={styles.highlight}>name!</span>
      </h1>

      <Form />
      <NameContent />
    </div>
  );
}

export default GenNameSection;
