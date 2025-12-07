import React from "react";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import './App.css';
import Expenses from "./components/Expenses";

const App = () => {
  return (
    <div>
      <Header />
      <div className="inc-exp-container">
        <IncomeExpenses />
        <Expenses />
      </div>
    </div>
  )
}
export default App;