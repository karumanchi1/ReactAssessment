import React  from "react";
import classes from "./styles/IDFilter.module.css";

const IDFilter = (props) => {


  const filterIDHandler = (event)=>{
    props.onfilterChange(event.target.value);

  }
  return (
    <div className={classes.filter}>
      <div className={classes.control}>
        <label>Select Person By ID</label>
        <select value={props.selected} onChange={filterIDHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default IDFilter;
