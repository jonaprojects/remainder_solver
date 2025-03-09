import classes from "./PrimaryButton.module.css";

export default function PrimaryButton(props) {
  return <button className={classes.primary}>{props.children}</button>;
}

