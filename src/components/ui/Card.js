import "./styles/Card.css";

 const Card = (props) => {
 const classes = 'card ' + props.className;
 return (
   <div className={classes} data-testid="rewards-card">
     {props.children}
   </div>
 );
}
export default Card;