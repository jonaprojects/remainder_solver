import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url('${props.imageUrl}')`,
      }}
    >
      <div>
        <h1 className={classes.title}>{props.title}</h1>
        <p className={classes.par}>{props.subtitle}</p>
      </div>
    </div>
  );
}
