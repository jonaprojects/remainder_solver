import classes from "./H2.module.css";

export default function H2(props) {
  return <h2 className={classes.h2}>{props.children}</h2>;
}
