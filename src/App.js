import React from "react";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import './App.css';
import Balance from "./components/Balance";
import TransictionList from "./components/TransictionList";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses /> 
        <TransictionList />
       
      </div>
    </div>
  )
}
export default App;