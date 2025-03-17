import { createContext, useContext, useReducer, useState } from "react";

const StepsContext = createContext();
const initialFormState = {
  name: "",
  email: "",
  phone: "",
};
const initialErrorState = {
  nameError: "",
  emailError: "",
  phoneError: "",
};
const Info = [
  {
    h: "Personal info",
    p: "plese provide your name, email address, and phone number.",
  },
  {
    h: "Select your plan",
    p: "you have the option of monthly or yealy billing.",
  },
  {
    h: "Pick add-ons",
    p: "Add-ons help enhance your gaming experiance",
  },
  {
    h: "Finishing up",
    p: "Double-check everything looks OK before confirming",
  },
];


function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
function errorReducer(state, action) {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        [action.field]: action.error,
      };
    case "RESET_ERRORS":
      return initialErrorState; // Reset error fields to initial values
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function StepsProvider({ children }) {
  const [plan, setplan] = useState("");
  const [adOn, setAdOn] = useState([]);
  const [monthly, setMonthly] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const [errorState, errorDispatch] = useReducer(
    errorReducer,
    initialErrorState
  );
  function toggleMonthly(){
    setMonthly(!monthly)
  }
  function setPlan(plan){
    setplan(plan)
  }


  function validateForm(formState) {
    let isValid = true;
    const errors = {};

    if (formState.name.trim() === "") {
      errors.nameError = "Username is required.";
      isValid = false;
    }

    if (formState.email.trim() === "") {
      errors.emailError = "Password is required.";
      isValid = false;
    }

    if (formState.phone.trim() === "") {
      errors.phoneError = "Password is required.";
      isValid = false;
    }

    return { isValid, errors };
  }

  function nextPage() {
    const { isValid, errors } = validateForm(formState);
    if (!isValid) {
      errorDispatch({ type: "RESET_ERRORS" }); // Reset error fields
      // Dispatch the error messages to update the error state
      Object.keys(errors).forEach((field) => {
        errorDispatch({ type: "SET_ERROR", field, error: errors[field] });
      });
      return;
    }
    if(currentStep === 2 && plan === "") return;
    if (currentStep === 4) return;
    setCurrentStep((prevstep) => prevstep + 1);
    errorDispatch({ type: "RESET_ERRORS" }); // Reset error fields
  }

  function previousPage() {
    if (currentStep === 1) return;
    setCurrentStep((prevstep) => prevstep - 1);
  }

  function changeStep(step) {
    const { isValid, errors } = validateForm(formState);
    if (!isValid) {
      errorDispatch({ type: "RESET_ERRORS" }); // Reset error fields
      // Dispatch the error messages to update the error state
      Object.keys(errors).forEach((field) => {
        errorDispatch({ type: "SET_ERROR", field, error: errors[field] });
      });
      return;
    }
    setCurrentStep(step);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    formDispatch({ type: "CHANGE", field: name, value });
  };

  return (
    <StepsContext.Provider
      value={{
        currentStep,
        formState,
        errorState,
        Info,
        plan,
        monthly,
        adOn,
        setAdOn,
        toggleMonthly,
        setPlan,
        nextPage,
        previousPage,
        changeStep,
        handleInputChange,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
}

function useSteps() {
  const context = useContext(StepsContext);
  if (context === undefined)
    throw new Error("Stepscontext is used outside StepsProvder");
  return context;
}

export { StepsProvider, useSteps };
