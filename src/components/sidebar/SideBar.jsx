import styles from "./SideBar.module.css";
import { useSteps } from "../../context/StepsProvider";
const SideBar = () => {
  const { currentStep, changeStep } = useSteps();

  return (
    <div className={styles.sidebar}>
      <ul>
        <li onClick={() => changeStep(1)}>
          <div
            className={`${styles.num} ${
              currentStep === 1 ? styles.active : ""
            }`}
          >
            {1}
          </div>
          <p>
            <span>STEP 1</span>
            <br /> YOUR INFO
          </p>
        </li>
        <li onClick={() => changeStep(2)}>
          <div
            className={`${styles.num} ${
              currentStep === 2 ? styles.active : ""
            }`}
          >
            {2}
          </div>
          <p>
            <span>STEP 2</span>
            <br /> SELECT PLAN
          </p>
        </li>
        <li onClick={() => changeStep(3)}>
          <div
            className={`${styles.num} ${
              currentStep === 3 ? styles.active : ""
            }`}
          >
            {3}
          </div>
          <p>
            <span>STEP 3</span>
            <br /> ADD-ONS
          </p>
        </li>
        <li onClick={() => changeStep(4)}>
          <div
            className={`${styles.num} ${
              currentStep === 4 ? styles.active : ""
            }`}
          >
            {4}
          </div>
          <p>
            <span>STEP 4</span>
            <br /> SUMMARY
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
