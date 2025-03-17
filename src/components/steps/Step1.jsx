import { useSteps } from "../../context/StepsProvider";

import Input from "../input/Input";
import StepInfo from "../stepInfo/StepInfo";

function Step1() {
  const { formState, errorState, handleInputChange } = useSteps();
  const { name, email, phone } = formState;
  const { nameError, emailError, phoneError } = errorState;
  return (
    <div style={{ width: "100%" }}>
      <form>
        <Input
          lable="Name"
          value={name}
          name="name"
          onchange={handleInputChange}
          error={nameError}
          placeholder={"e.g. Stephen King"}
        />
        <Input
          lable="Email Address"
          value={email}
          name="email"
          onchange={handleInputChange}
          error={emailError}
          placeholder={"e.g. stephenking@lorem.com"}
        />
        <Input
          lable="Phone Number"
          value={phone}
          name="phone"
          onchange={handleInputChange}
          error={phoneError}
          placeholder={"e.g. +1234 567 890"}
        />
      </form>
    </div>
  );
}

export default Step1;
