// import ExpenseItem from "./conponents/ExpenseItem";
import React from "react";
import Expenses from "./conponents/Expenses/Expenses";

export default function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 98.38,
      date: new Date(2020, 2, 15)
    },
    {
      id: "e2",
      title: "Car Insureance",
      amount: 295.38,
      date: new Date(2021, 2, 23)
    },
    {
      id: "e3",
      title: "New Desk (Wooden)",
      amount: 29.88,
      date: new Date(2023, 5, 4)
    },
    {
      id: "e4",
      title: "health Insureance",
      amount: 95.8,
      date: new Date(2031, 6, 2)
    }
  ];
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Lets get started!"),
    React.createElement(Expenses, { item: expenses })
  );
  // return (
  //   <div className="App">
  //     <h2>Lets go started!</h2>
  //     <Expenses item={expenses} />
  //   </div>
  // );
}
