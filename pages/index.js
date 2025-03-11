import React, { useRef } from "react";

import Navbar from "@/components/navbar/Navbar";
import classes from "../styles/Home.module.css";
import Equation from "@/components/equations/Equation";
import EquationSystem from "@/components/equations/EquationSystem";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function Home() {
  const systemRef = useRef();

  const handleSolve = () => {
    const res = systemRef.current.solve();
    console.log(`Solution: ${res.solution} mod ${res.mod}`);
  };
  return (
    <div className={classes.container}>
      <Navbar />
      <main className={classes.main}>
        <div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
            <h1 className={classes.header} style={{ marginBottom: "0.75rem" }}>
              Modular Equations Calculator
            </h1>
            <p>
              Solve systems of modular equations with the Chinese Remainder
              Theorem
            </p>
          </div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
            <EquationSystem ref={systemRef} />
          </div>
          <PrimaryButton onClick={handleSolve}>
           Solve
          </PrimaryButton>
        </div>
      </main>
    </div>
  );
}
