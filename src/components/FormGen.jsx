import { IoPersonOutline, IoReceiptOutline } from "react-icons/io5";
import { generateFullName } from "roman-name-generator";
import { useNames } from "../contexts/NamesContext";
import Button from "./Button.jsx";
import styles from "./FormGen.module.css";

function FormGen() {
  const { dispatch, people, setPeople } = useNames();

  function handleSubmit(e) {
    e.preventDefault();
    const gender = e.target.gender.value;
    const status = e.target.status.value;
    const person = generateFullName(gender, status);
    let updatedPeople = people;

    dispatch({ type: "fullName/created", payload: person });

    if (people.length === 20) {
      updatedPeople = people.slice(0, 20);
    }

    setPeople([person, ...updatedPeople]);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <IoPersonOutline size="2.4rem" color="#eb967a" />

        <select name="gender">
          <option value="any">Random gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

      <div>
        <IoReceiptOutline size="2.4rem" color="#eb967a" />
        <select name="status">
          <option value="any">Random status</option>
          <option value="citizen">Citizen</option>
          <option value="libertus">Libertus</option>
          <option value="slave">Slave</option>
        </select>
      </div>

      <Button variant="primary" type="submit">
        Generate!
      </Button>
    </form>
  );
}

export default FormGen;
