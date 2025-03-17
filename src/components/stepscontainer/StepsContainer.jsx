import styles from "./StepsContainer.module.css";
import NextButton from "../buttonscontainer/NextButton";
import { useSteps } from "../../context/StepsProvider";
import BackButton from "../buttonscontainer/BackButton";
import StepInfo from "../stepInfo/StepInfo";
import FinishButton from "../buttonscontainer/FinishButton";
const StepsContainer = ({ children }) => {
  const { currentStep, Info } = useSteps();
  return (
    <div className={styles.stepsContainer}>
      <StepInfo
        haeder={Info[currentStep - 1].h}
        paragraph={Info[currentStep - 1].p}
      />
      {children}
      <div className={styles.row}>
        {currentStep !== 4 ? <NextButton /> : <FinishButton />}

        {currentStep > 1 ? <BackButton /> : ""}
      </div>
    </div>
  );
};

export default StepsContainer;
