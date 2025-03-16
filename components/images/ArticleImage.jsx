import classes from "./ArticleImage.module.css";

export default function ArticleImage(props) {
  return (
    <div className={classes.container}>
      <img
        src={props.path}
        width={500}
        height={500}
        alt={props.alt}
        className={classes.img}
      />
      <small className={classes.text}>{props.description}</small>
    </div>
  );
}
