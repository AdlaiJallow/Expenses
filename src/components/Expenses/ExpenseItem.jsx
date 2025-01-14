import React, {useState} from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  
  const handleClick = () => {
    setTitle("Updated!")
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
}
