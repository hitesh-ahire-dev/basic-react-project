import { useState } from "react";
import BgColorChanger from "./components/BgColorChanger";
import PasswordGenerator from "./components/PasswordGenerator";
import CurrencyConverterHome from "./components/currency-converter/CurrencyConverterHome";
import AdditionApp from "./components/AdditionApp";
import Parent from "./components/parent-child-reln/Parent";
import UserContextHome from "./components/context-section/components/UserContextHome";
import TodoHome from "./todo-app/TodoHome";

function App() {
  const [color, setColor] = useState("red");

  return (
    // backgroound color changes code 
    <div>
      {/* <AdditionApp/> */}
      {/* <BgColorChanger /> */}

    {/* <PasswordGenerator /> */}

    {/* <CurrencyConverterHome></CurrencyConverterHome> we have to work on logic */}

    {/* <Parent/> */}

    {/* <UserContextHome/> */}

    <TodoHome/>
    
    </div>

  );
}

export default App;
