import "./styles/Card.css";
function Card(props){
 const classes = 'card ' + props.className;
 return (
   <div className={classes} data-testid="rewards-card">
     {props.children}
   </div>
 );
}
export default Card;