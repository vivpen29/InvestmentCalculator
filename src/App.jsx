import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";

function App() {

    const [row, setRow] = useState({
        req : {
            initialInvestment: 0,
            annualInvestment: 0,
            interestRate: 0,
            duration: 0
        }
    });

  return (
      <div>
          <UserInput outputData={setRow}/>
          <Result inputData={row}/>
      </div>
  )
}

export default App
