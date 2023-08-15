import { useState } from "react";
import Form from "./components/Form";
import Headers from "./components/Header";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [tableData , setTableData] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSaving']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlyContribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setTableData(yearlyData);
  };

  // const onFormSubmit = (formData) => {
  //   console.log("🚀 ~ file: App.js:34 ~ onFormSubmit ~ formData:", formData)
  //   calculateHandler(formData);
  // } 

  return (
    <div>
      <Headers />

      <Form onFormSubmit={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentTable  tableData={tableData} />
    </div>
  );
}

export default App;
