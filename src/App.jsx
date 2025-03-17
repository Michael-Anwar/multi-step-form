import './App.css'
import StepsContainer from './components/stepscontainer/StepsContainer'
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import { useSteps } from './context/StepsProvider';
import SideBar from './components/sidebar/SideBar'

function App() {

  const {currentStep} = useSteps();

  return (
    <div className='app'>
      <SideBar/>
      <StepsContainer>
        {(currentStep === 1) &&  <Step1/>}
        {(currentStep === 2) &&  <Step2/>}
        {(currentStep === 3) &&  <Step3/>}
        {(currentStep === 4) &&  <Step4/>}
      </StepsContainer>
      <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/Michael-Anwar">Michael Anwar</a>.
  </div>
    </div>
  )
}

export default App
