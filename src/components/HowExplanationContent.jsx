import styles from "./HowExplanationContent.module.css";

function HowExplanationContent() {
  return (
    <div className={styles.content}>
      <h1>Hello,</h1>
      <h2 className={styles.alignLeft}>
        If you are looking for a realistic ancient Roman name, this{" "}
        <span>generator</span> is designed for <span>you</span>!
      </h2>
      <p>
        Finding names that fit the behaviour of our characters can sometimes be
        a challenge. As a writer, I used to spend a lot of time trying to find
        the name that would give me the energy of a particular role in a script.
      </p>
      <p>
        It is just a name, but that name embodies personality, psychology,
        temperament, traits, qualities and ultimately the whole aura of a
        character.
      </p>
      <p className={` ${styles.alignLeft} ${styles.italic}`}>
        Names must therefore be chosen with <span>care</span> and{" "}
        <span>love</span>.
      </p>
      <p>
        The situation becomes more complicated when dealing with a narrow
        historical period, such as Ancient Rome.
      </p>
      <p>
        In many interesting books and films about Ancient Rome, the names of the
        characters may not be very accurate. This is because there is a specific
        pattern by which Roman people built their names, depending on their
        citizenship, rank and gender.
      </p>
      <p>
        This generator has been created to follow the Roman naming convention of{" "}
        <span className={styles.italic}>tria nomina</span> (three names):{" "}
        <span className={styles.italic}>praenomen, nomen</span> and{" "}
        <span className={styles.italic}>cognomen</span>, in that exact order,
        without swapping them. In addition, all the names were chosen from
        historical sources, both literary and epigraphic.
      </p>
      <p>
        In particular, for the names of slaves, this generator has been
        implemented using the catalogue of the Museum of Roman Epigraphy of the
        Terme di Caracalla, in Rome.
      </p>
      <p>
        Finally, when choosing a name for your character, remember that for the
        Romans, it was everything. The{" "}
        <span className={styles.italic}>tria nomina</span> were the quintessence
        of citizenship, embodying their values and the honour of their lineage.
      </p>
    </div>
  );
}

export default HowExplanationContent;
