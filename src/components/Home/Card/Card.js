import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.btn} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
