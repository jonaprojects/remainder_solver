export default function ArticleImage(props) {
  <img
    src={props.pat}
    width={500}
    height={500}
    alt={props.alt}
    style={{ maxWidth: "100%", height: "auto", width: "80%" }}
  />;
}
