import { useState, useEffect } from "react";

import classes from "./Equation.module.css";
import DeleteButton from "../buttons/DeleteButton";
import AddButton from "../buttons/AddButton";

export default function Equation(props) {
  const [A, setA] = useState(parseInt(props.A, 10) || 0); // Added fallback to 0 if NaN
  const [B, setB] = useState(parseInt(props.B, 10) || 0); // Added fallback to 0 if NaN
  const [N, setN] = useState(parseInt(props.N, 10) || 0); // Added fallback to 0 if NaN

  useEffect(() => {
    setA(parseInt(props.A, 10) || 0); // Re-sync with parent on props change
    setB(parseInt(props.B, 10) || 0); // Re-sync with parent on props change
    setN(parseInt(props.N, 10) || 0); // Re-sync with parent on props change
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
    props.insert(props.index, 0, 0, 0);
  };

  const remove = () => {
    props.remove(props.index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={`${classes.textBoxItems} ${classes["small-gap"]}`}>
          <input
            type="number"
            className={classes.numberInput}
            value={A}
            onChange={onChangeAHandler}
          />
          <label>X</label>
        </div>
        <label>=</label>
        <div className={`${classes.textBoxItems} ${classes["large-gap"]}`}>
          <input
            type="number"
            className={classes.numberInput}
            value={B}
            onChange={onChangeBHandler}
          />
          <div>
            <label>mod </label>

            <input
              type="number"
              className={classes.numberInput}
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
