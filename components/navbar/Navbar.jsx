import PrimaryButton from "../buttons/PrimaryButton";
import classes from "./Navbar.module.css";
// Example: Importing and using an SVG as a React component

export default function Navbar() {
  return (
    <nav className={classes.container}>
      <div className={classes["nav-items"]}>
        <img
          src="logo.svg"
          class={classes.logo}
          alt="logo"
          width={48}
          height={48}
        />
        <ul class={classes["nav-links"]}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Background</a>
          </li>
        </ul>
        <div className={classes["right-wing"]}>
          <PrimaryButton>Github</PrimaryButton>
        </div>
      </div>
    </nav>
  );
}
