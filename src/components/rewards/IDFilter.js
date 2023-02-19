import React  from "react";
import classes from "./styles/IDFilter.module.css";


//This component is used to filter by ID.
const IDFilter = ({onfilterChange, selected}) => {


  const filterIDHandler = (event)=>{
    onfilterChange(event.target.value);

  }
  return (
    <div className={classes.filter}>
      <div className={classes.control}>
        <label>Select Person By ID</label>
        <select value={selected} onChange={filterIDHandler}>
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
