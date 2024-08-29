import { useState } from "react";
import styles from "./NameAnatomy.module.css";

function NameAnatomy() {
  const [activeNamePart, setActiveNamePart] = useState("praenomen");

  return (
    <div className={styles.anatomy}>
      <h2>Anatomy of a name</h2>
      <div>
        <h3>
          <span
            onMouseEnter={() => setActiveNamePart("praenomen")}
            className={`${activeNamePart === "praenomen" && styles.activeName}`}
          >
            Marcus
          </span>{" "}
          <span
            onMouseEnter={() => setActiveNamePart("nomen")}
            className={`${activeNamePart === "nomen" && styles.activeName}`}
          >
            Tullius
          </span>{" "}
          <span
            onMouseEnter={() => setActiveNamePart("cognomen")}
            className={`${activeNamePart === "cognomen" && styles.activeName}`}
          >
            Cicero
          </span>
        </h3>
        {activeNamePart === "praenomen" && (
          <div className={styles.contentBox}>
            <h4>praenomen</h4>
            <div className={styles.textBox}>
              <p>
                Originally it was the personal name of the Roman citizen, but
                from the 3rd century BC., Roman people began to use few
                prenomina and in abbreviated form.
              </p>
              <p>
                For some centuries women had also a prenomen, but it was only
                used within the family or in unofficial contexts. It was because
                women did not participate to the vita activa, in the senate,
                thus there was no need to distinguish them.
              </p>
              <p>
                For this reason and not to forget how women were considered in
                ancient societies, women generated names have no praenomen.
              </p>
            </div>
          </div>
        )}
        {activeNamePart === "nomen" && (
          <div className={styles.contentBox}>
            <h4>Nomen</h4>
            <div className={styles.textBox}>
              <p>
                It indicates the family to which the individual belongs and
                designates all the members of the same gens: men and women, free
                born or freed.
              </p>

              <p>
                The nomen was transmitted from the father to both male and
                female children, who, once married, kept it.
              </p>
            </div>
          </div>
        )}
        {activeNamePart === "cognomen" && (
          <div className={styles.contentBox}>
            <h4>Cognomen</h4>
            <div className={styles.textBox}>
              <p>
                Originally, it was an unofficial nickname given to distinguish
                people more precisely. It could be created on the basis of
                physical or psychological characteristics. It could derive from
                the names of cities or folks, trades, or even plants.
              </p>
              <p>
                Sometimes it was related to birth order or it evoked historical
                and mythological characters (in the cases of freedmen, for
                instance).{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NameAnatomy;
