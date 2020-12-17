import React from "react";
import "./App.css";
import ModernPeriodicTable from "./Component/ModernPeriodicTable/ModernPeriodicTable";
import TableHeader from "./Component/TableHeader/TableHeader";
import arrow from './Assets/keyboard-arrow-down.svg'
// import { elements } from "./Data/data";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div style={{ color: "white" }}>Modern Periodic Table</div>
        <div className="top-heading-info">
          <span style={{marginTop:'-4px'}}>
            <img
              className='arrow1'
              src={arrow}
              alt="arrow"
            />
          </span>
          <span>
            <hr />
          </span>
          <span> Group</span>
          <span>
            <hr />
          </span>
          <span style={{marginTop:'-4px'}}>
            <img
              className='arrow2'
              src={arrow}
              alt="arrow"
            />
          </span>
        </div>

        <TableHeader />
        <ModernPeriodicTable />
      </div>
    </div>
  );
}

export default App;
