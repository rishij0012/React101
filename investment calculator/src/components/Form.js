import { useReducer } from "react";

const initialFormInput = {
  currentSaving: 0,
  yearlyContribution: 0,
  expectedReturn: 0,
  duration: 0,
};

const formHandler = (preState, action) => {
  console.log(
    "🚀 ~ file: Form.js:11 ~ formHandler ~ preState, action:",
    preState,
    action
  );
  switch (action.type) {
    case "currentSaving":
    case "yearlyContribution":
    case "expectedReturn":
    case "duration":
      return { ...preState, [action.type]: action.value };

    default:
      return initialFormInput;
  }
};

function Form(props) {
  const { onFormSubmit } = props;
  const [formData, dispatch] = useReducer(formHandler, initialFormInput);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  const onResetHandler = (e) => {
    onFormSubmit(initialFormInput);
    dispatch({ value: e.target.value, type: "default" });
  };

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formData.currentSaving}
            onChange={(e) =>
              dispatch({ value: e.target.value, type: "currentSaving" })
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={formData.yearlyContribution}
            onChange={(e) =>
              dispatch({ value: e.target.value, type: "yearlyContribution" })
            }
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            value={formData.expectedReturn}
            onChange={(e) =>
              dispatch({ value: e.target.value, type: "expectedReturn" })
            }
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={formData.duration}
            onChange={(e) =>
              dispatch({ value: e.target.value, type: "duration" })
            }
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={onResetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
