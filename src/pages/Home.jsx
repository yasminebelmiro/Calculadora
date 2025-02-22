import React, { useState } from "react";
import { LuDelete } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import Button from "../components/Button";
import Input from "../components/Input";
const Home = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [operator, setOperator] = useState();
  const [result, setResult] = useState();

  // Add um numero
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => {
      //add apenas uma virgula
      if (number === "," && prev.includes(",")) {
        return prev;
      }
      //verifica se o primeiro numero é zero
      const newValue = prev === "0" ? "" : prev;
      return `${newValue}${number}`;
    });
  };

  //limpa todos os caracteres
  const handleClear = () => {
    setCurrentNumber("0");
  };

  //limpa o ultimo digito
  const handleClearPrev = () => {
    setCurrentNumber((prev) => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      } else {
        return "0";
      }
    });
  };

  const handleOperation = (operator) => {
    setOperator(operator  );
    setResult(currentNumber);
    setCurrentNumber("0");
  };

  const handleCalculate = () => {
    if (operator && result) {
      const num1 = parseFloat(result.replace(",", "."));
      const num2 = parseFloat(currentNumber.replace(",", "."));
      switch (operator) {
        case "+":
          setCurrentNumber((num1 + num2).toString());
          break;
        case "-":
          setCurrentNumber((num1 - num2).toString());
          break;
        case "x":
          setCurrentNumber((num1 * num2).toString());
          break;
        case "/":
          setCurrentNumber((num1 / num2).toString());
          break;
        case "%":
          setCurrentNumber((num1 * (num2 / 100)).toString());
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="home">
      <div className="calculator">
        <Input value={currentNumber} />

        <div className="number-container">
          <Button text="C" onClick={() => handleClear()} />
          <Button
            text={<LuDelete/>}
            onClick={() => handleClearPrev()}
          />
          <Button text="%" onClick={() => handleOperation("%")} />
          <Button text="/" onClick={() => handleOperation("/")} />

          <Button text="7" onClick={() => handleAddNumber(7)} />
          <Button text="8" onClick={() => handleAddNumber(8)} />
          <Button text="9" onClick={() => handleAddNumber(9)} />
          <Button text="x" onClick={() => handleOperation("x")} />

          <Button text="4" onClick={() => handleAddNumber(4)} />
          <Button text="5" onClick={() => handleAddNumber(5)} />
          <Button text="6" onClick={() => handleAddNumber(6)} />
          <Button text="-" onClick={() => handleOperation("-")} />

          <Button text="1" onClick={() => handleAddNumber(1)} />
          <Button text="2" onClick={() => handleAddNumber(2)} />
          <Button text="3" onClick={() => handleAddNumber(3)} />
          <Button text="+" onClick={() => handleOperation("+")} />

          <Button text={<FaReact className="icon" />} />
          <Button text="0" onClick={() => handleAddNumber(0)} />
          <Button text="," onClick={() => handleAddNumber(",")} />
          <Button text="=" onClick={handleCalculate} />
        </div>
      </div>
    </div>
  );
};

export default Home;
