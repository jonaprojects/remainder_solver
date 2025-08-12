import { useState, useEffect } from "react";

import classes from "./Equation.module.css";
import DeleteButton from "../buttons/DeleteButton";
import AddButton from "../buttons/AddButton";

export default function Equation(props) {
  const [A, setA] = useState(
    props.A !== undefined ? parseInt(props.A, 10) || 1 : 1
  ); // Default to 1 for X coefficient
  const [B, setB] = useState(parseInt(props.B, 10) || 0); // Default to 0
  const [N, setN] = useState(parseInt(props.N, 10) || 0); // Default to 0

  useEffect(() => {
    setA(props.A !== undefined ? parseInt(props.A, 10) || 1 : 1); // Default to 1 for X coefficient
    setB(parseInt(props.B, 10) || 0); // Default to 0
    setN(parseInt(props.N, 10) || 0); // Default to 0
  }, [props.A, props.B, props.N]);

  const onChangeAHandler = (e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setA(newValue);
    props.update(props.index, newValue, B, N); // Ensure A is passed as a number
  };

  const onChangeBHandler = (e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setB(newValue);
    props.update(props.index, A, newValue, N); // Ensure B is passed as a number
  };

  const onChangeNHandler = (e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setN(newValue);
    props.update(props.index, A, B, newValue); // Ensure N is passed as a number
  };

  const insert = () => {
    props.insert(props.index, 1, 0, 0); // Default A=1, B=0, N=0 for new equation
  };

  const remove = () => {
    props.remove(props.index);
  };

  // Original layout, but keep math-style input box styling
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={`${classes.textBoxItems} ${classes["small-gap"]}`}>
          <input
            type="number"
            className={classes.numberInputMath}
            value={A}
            onChange={onChangeAHandler}
          />
          <span className={classes.mathSymbol}>X</span>
        </div>
        <label>=</label>
        <div className={`${classes.textBoxItems} ${classes["large-gap"]}`}>
          <input
            type="number"
            className={classes.numberInputMath}
            value={B}
            onChange={onChangeBHandler}
          />
          <div>
            <span className={classes.mathSymbol}>mod</span>{" "}
            <input
              type="number"
              className={classes.numberInputMod}
              value={N}
              onChange={onChangeNHandler}
            />
          </div>
        </div>
      </div>
      <div className="optionsContainer">
        <DeleteButton delete={remove} />
        <AddButton add={insert} />
      </div>
    </div>
  );
}
