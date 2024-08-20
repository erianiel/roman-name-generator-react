import { IoPersonOutline, IoReceiptOutline } from "react-icons/io5";
import Button from "./Button.jsx";
import styles from "./FormGen.module.css";

function FormGen() {
  return (
    <form className={styles.form}>
      <div>
        <IoPersonOutline size="2.4rem" color="#eb967a" />

        <select>
          <option>Random gender</option>
          <option>Female</option>
          <option>Male</option>
        </select>
      </div>

      <div>
        <IoReceiptOutline size="2.4rem" color="#eb967a" />
        <select>
          <option>Random status</option>
          <option>Citizen</option>
          <option>Libertus</option>
          <option>Slave</option>
        </select>
      </div>

      <Button type="submit">Generate!</Button>
    </form>
  );
}

export default FormGen;
