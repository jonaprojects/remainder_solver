import { useState, forwardRef, useImperativeHandle } from "react";
import ModularSystem from "@/models/ModularSystem";
import ModularEquation from "@/models/ModularEquation";
import Equation from "./Equation";
import classes from "./EquationSystem.module.css";

// Forward ref to expose the solve method to the parent
const EquationSystem = forwardRef((props, ref) => {
  const [equations, setEquations] = useState([
    new Equation(0, 0, 0),
    new Equation(0, 0, 0),
    new Equation(0, 0, 0),
  ]);

  const insertEquation = (index, A, B, N) => {
    // Create a new equation object
    const newEquation = new ModularEquation(A, B, N);

    // Insert the new equation at the specified index
    setEquations((prevEquations) => {
      const newEquations = [...prevEquations];
      newEquations.splice(index + 1, 0, newEquation);
      return newEquations;
    });
  };

  const removeEquation = (index) => {
    setEquations((prevEquations) => {
      const newEquations = [...prevEquations];
      newEquations.splice(index, 1);
      return newEquations;
    });
  };

  const updateEquation = (index, A, B, N) => {
    setEquations((prevEquations) => {
      const newEquations = [...prevEquations];
      newEquations[index] = new ModularEquation(A, B, N);
      return newEquations;
    });
  };

  // Expose the solve method to the parent component
  useImperativeHandle(ref, () => ({
    solve() {
      console.log("Solving the system...");
      const system = new ModularSystem(equations);
      console.log(system.equations);
      return system.solve();
    },
  }));

  return (
    <div className={classes.equationsContainer}>
      {equations.map((equation, index) => {
        const uniqueId = `${index}-${Date.now()}`;

        return (
          <Equation
            A={equation.A}
            B={equation.B}
            N={equation.N}
            index={index}
            update={updateEquation}
            insert={insertEquation}
            remove={removeEquation}
            key={uniqueId}
          />
        );
      })}
    </div>
  );
});

export default EquationSystem;
