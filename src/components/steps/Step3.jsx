import { useSteps } from "../../context/StepsProvider";

function Step() {
  const { monthly, adOn, setAdOn } = useSteps();
  const adOns = [
    {
      name: "Online service",
      desc: "Accsess to multiplayer games",
      price: 1,
    },
    {
      name: "Large storage",
      desc: "Extra 1 TB cloudesave",
      price: 2,
    },
    {
      name: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 3,
    },
  ];

  const handleChange = (e, addon) => {
    if (e.target.checked) {
      setAdOn(prev => [...prev, addon]); // Use previous state
    } else {
      setAdOn(prev => prev.filter(item => item.name !== addon.name));
    }
  };

  return (
    <div className="step3">
      {adOns.map((addon, index) => {
        const { name, desc, price } = addon;
        return (
          <label className={`adon ${adOn.some(item => item.name === name) ? "selected" : ""}`} key={index}>
            <input
              type="checkbox"
              checked={adOn.some((item) => item.name === name)}
              onChange={(e) => {
                handleChange(e, addon);
              }}
            />
            <div>
              <span className="name">{name}</span>
              <span>{desc}</span>
            </div>
            <p>
              {`+$${monthly ? price : price * 10}/${monthly ? "mo" : "yr"}`}
            </p>
          </label>
        );
      })}
    </div>
  );
}

export default Step;
