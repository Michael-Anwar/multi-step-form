import "./steps.css";
import { IoLogoGameControllerA } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { SiApplearcade } from "react-icons/si";
import { useSteps } from "../../context/StepsProvider";

const plans = [
  {
    name: "Arcade",
    price: 9,
    icon: (
      <SiApplearcade
        className="icon"
        style={{ backgroundColor: "rgb(242, 193, 58)" }}
      />
    ),
  },
  {
    name: "Advance",
    price: 12,
    icon: (
      <IoLogoGameControllerA
        className="icon"
        style={{ backgroundColor: "rgb(250, 127, 145)" }}
      />
    ),
  },
  {
    name: "Pro",
    price: 15,
    icon: (
      <IoGameController
        className="icon"
        style={{ backgroundColor: "rgb(71, 61, 255)" }}
      />
    ),
  },
];

function Step2() {
  const { monthly, toggleMonthly, plan: planName, setPlan } = useSteps();
  console.log(planName);
  return (
    <div className="step2">
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div
            className={`plan ${planName.name === plan.name ? "selected" : ""}`}
            key={index}
            onClick={() => {
              setPlan(plan);
            }}
          >
            {plan.icon}
            <div>
              <span
               
              >
                {plan.name}
              </span>
              <span
                
              >{`$${monthly ? plan.price : plan.price * 10}/${
                monthly ? "mo" : "yr"
              }`}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="switch">
        <span className={monthly && "active"}>monthly</span>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="togle-swith"
            checked={monthly}
            onClick={toggleMonthly}
          />
          <label htmlFor="togle-swith"></label>
        </div>
        <span className={!monthly && "active"}>yearly</span>
      </div>
    </div>
  );
}

export default Step2;
