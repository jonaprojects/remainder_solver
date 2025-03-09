import Navbar from "@/components/navbar/Navbar";
import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Navbar />
      <main className={classes.main}>
        <div>
          <h1 style={{ marginBottom: "0.75rem" }}>
            Modular Equations Calculator
          </h1>
          <p>
            Solve systems of modular equations with the Chinese Remainder
            Theorem
          </p>
        </div>
      </main>
    </div>
  );
}
