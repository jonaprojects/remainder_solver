import classes from "./PrimaryButton.module.css";

export default function PrimaryButton(props) {
  return (
    <button className={classes.primary} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
