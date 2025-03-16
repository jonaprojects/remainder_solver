import classes from "./H1.module.css";

export default function H1(props) {
  return <h1 className={classes.h1}>{props.children}</h1>;
}
