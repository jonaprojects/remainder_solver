import classes from "./Quote.module.css";

export default function Quote({ quote, description }) {
  return (
    <div className={classes.container}>
      <div className={classes.line}></div>
      <h2 className={classes.quote}>{quote}</h2>
      <p className={classes.description}>{description}</p>
      <div className={classes.line}></div>
    </div>
  );
}
