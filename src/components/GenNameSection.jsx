import styles from "./GenNameSection.module.css";

import Form from "./FormGen.jsx";

function GenNameSection() {
  return (
    <div>
      <h1 className={styles.title}>
        Create your <span className={styles.highlight}>realistic</span> <br />
        Ancient Roman <span className={styles.highlight}>name!</span>
      </h1>

      <Form />
    </div>
  );
}

export default GenNameSection;
