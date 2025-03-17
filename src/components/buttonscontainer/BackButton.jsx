import { useSteps } from "../../context/StepsProvider";
import styles from "./Buttons.module.css";

function BackButton() {
    const {previousPage} = useSteps()
  return (
    <button onClick={previousPage} className={styles.backButton}>
      Go back
    </button>
  );
}

export default BackButton;