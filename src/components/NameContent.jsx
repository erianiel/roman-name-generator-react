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
          {status === "citizen" && (
            <p>
              In ancient Rome, citizenship made the difference between the free
              honorable men and the others: foreigners and barbarians. Citizens
              were protected by laws and they had the right of governance and
              property. But most importantly, citizens had the right to glory.
              They had the goal of being recognized by the entire population for
              their virtues and merits, thus increasing the fame of their names
              and at the same time the greatness of Rome. More info,{" "}
              <a
                className={styles.contentLink}
                href="https://en.wikipedia.org/wiki/Roman_citizenship"
              >
                here
              </a>
              .
            </p>
          )}
          {status === "libertus" && (
            <p>
              When slaves were released from slavery, they became freedmen or
              freedwomen. They acquired Roman citizenship and the first two
              names of their ex-master. However, due to their role within
              society, they do not enjoy the same full rights as a free citizen
              by birth. Freedmen are precluded from access to the honors of the
              highest and most important public offices, regardless of their
              wealth. More info,{" "}
              <a
                className={styles.contentLink}
                href="https://en.wikipedia.org/wiki/Ancient_Roman_freedmen"
              >
                here
              </a>
              .
            </p>
          )}
          {status === "slave" && (
            <p>
              Slaves were considered inferior by nature and this is reflected in
              the legal inferiority that is associated with them: slaves had no
              rights. If a citizen is regarded as a legal subject, then a slave
              is, conversely, an object of the law, comparable to movable
              property. For this reason, they had only one name. More info,{" "}
              <a
                className={styles.contentLink}
                href="https://en.wikipedia.org/wiki/Slavery_in_ancient_Rome"
              >
                here
              </a>
              .
            </p>
          )}
        </div>
        <div>
          <h2>{gender}</h2>
          {gender === "female" && (
            <p>
              The role of women was limited to the domestic and private sphere.
              From father to husband, women were relegated to a subordinate
              position. Women were effectively barred from participation in
              public life, despite their noble status. However, a woman could
              administrate her own wealth and keep her names. More info,{" "}
              <a
                className={styles.contentLink}
                href="https://en.wikipedia.org/wiki/Women_in_ancient_Rome"
              >
                here
              </a>
              .
            </p>
          )}
          {gender === "male" && (
            <p>
              In Roman society, only men had the right to vote and could
              participate to the public sphere and military life, according to
              their own social status and hierarchy level. Nevertheless, even
              men of servile status could be given high-level organizational
              roles such as administrator, secretary, librarian and scribe. More
              info,{" "}
              <a
                className={styles.contentLink}
                href="https://en.wikipedia.org/wiki/Social_class_in_ancient_Rome"
              >
                here
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NameInfo;
