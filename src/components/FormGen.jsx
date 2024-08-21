import { IoPersonOutline, IoReceiptOutline } from "react-icons/io5";
import { generateFullName } from "roman-name-generator";
import { useNames } from "../contexts/NamesContext";
import Button from "./Button.jsx";
import styles from "./FormGen.module.css";

function FormGen() {
  const { dispatch } = useNames();

  function handleSubmit(e) {
    e.preventDefault();
    const gender = e.target.gender.value;
    const status = e.target.status.value;
    const fullName = generateFullName(gender, status);

    dispatch({ type: "fullName/created", payload: fullName });
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

      <Button type="submit">Generate!</Button>
    </form>
  );
}

export default FormGen;
