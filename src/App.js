import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import { useState } from "react";

function App() {
  const name = "Weerapol Thitprasert";

  const employee = [
    { name: "AAAA", email: "aaaa@gmail.com", age: 19 },
    { name: "BBBB", email: "bbbb@gmail.com", age: 19 },
    { name: "CCCC", email: "cccc@gmail.com", age: 19 },
  ];

  console.log(employee);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App">
        <h1>{count}</h1>
        <Button onClick={() => setCount(count + 1)}>Count ++</Button>
        <Button onClick={() => setCount(count - 1)}>Count --</Button>

        {employee.map((em, index) => (
          <li key={index}>
            ชื่อพนักงาน: {em.name} | อีเมล: {em.email} | อายุ: {em.age}
          </li>
        ))}
        <h1 className="text02">Hello Weerapol</h1>
        <Button text="OK" />
        <Button text="Cancel" />
      </div>
      <h1 className="text01">Test</h1>
    </>
  );
}

export default App;
