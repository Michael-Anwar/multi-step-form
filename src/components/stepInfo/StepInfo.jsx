import styles from './StepInfo.module.css'
function StepInfo({ haeder, paragraph }) {
  return (
    <div className={styles.StepInfo}>
      <h1>{haeder}</h1>
      <p >
        {paragraph}
      </p>
    </div>
  );
}

export default StepInfo;
