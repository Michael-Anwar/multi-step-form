import { useSteps } from '../../context/StepsProvider'
import styles from './Buttons.module.css'

function NextButton() {
     const {nextPage} = useSteps()

    return (
        <button onClick={nextPage} className={styles.button}>
            Next Step
        </button>
    )
}

export default NextButton