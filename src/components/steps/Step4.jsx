import { useSteps } from "../../context/StepsProvider";
function Step4() {
  const { adOn, plan, monthly, changeStep } = useSteps();

  const calculateTotal = () => {
    const planPrice = monthly ? plan.price : plan.price * 10;
    const addonsTotal = adOn.reduce(
      (sum, addon) => sum + (monthly ? addon.price : addon.price * 10),
      0
    );
    return planPrice + addonsTotal;
  };

  const totalPrice = calculateTotal();
  return (
    <div className="step4">
      <div className="bg">
        <div className="plan">
          <div className="">
            <p>{`${plan.name}/(${monthly ? "monthly" : "yearly"})`}</p>
            <span onClick={() => changeStep(2)}>change</span>
          </div>
          <p>
            {`+$${monthly ? plan.price : plan.price * 10}/${
              monthly ? "mo" : "yr"
            }`}
          </p>
        </div>
        {adOn.map((addon, index) => {
          const { name, price } = addon;
          return (
            <div className="adon " key={index}>
              <span className="name">{name}</span>

              <p>
                {`+$${monthly ? price : price * 10}/${monthly ? "mo" : "yr"}`}
              </p>
            </div>
          );
        })}
      </div>
      <div className="total">
        <p>Total (per {monthly ? "month" : "year"})</p>
        <span>
          +${totalPrice}/{monthly ? "mo" : "yr"}
        </span>
      </div>
    </div>
  );
}

export default Step4;
