import "./App.css";
import { elements } from "./Data/data";

function App() {
  const lanthanoides = elements.map((i) => i).splice(57, 14);
  const actinoides = elements.map((i) => i).splice(89, 14);
  const tableElements = elements
    .filter((option) => {
      return (
        option.value ===
        lanthanoides.find((v) => {
          return v.atomicNumber === option.atomicNumber;
        })
      );
    })
    .filter((option) => {
      return (
        option.value ===
        actinoides.find((v) => {
          return v.atomicNumber === option.atomicNumber;
        })
      );
    });

  return (
    <div className="App">
      <div className="App-header">
      <div style={{color:'white'}}>Modern Periodic Table</div>
        <div className="table-elements">
          <div className="period1">
            {tableElements
              .map((i) => (
                <div className="card-element">
                  <div>{i.atomicNumber}</div>
                  <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                    {i.symbol}
                  </div>
                  <div>{i.name}</div>
                  <div>{i.atomicMass}</div>
                </div>
              ))
              .splice(0, 2)}
          </div>
          <div className="period2">
            <div className='period2-left-elements'>
            {tableElements
              .map((i) => (
                <div className="card-element">
                  <div>{i.atomicNumber}</div>
                  <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                    {i.symbol}
                  </div>
                  <div>{i.name}</div>
                  <div>{i.atomicMass}</div>
                </div>
              ))
              .splice(2, 2)}
              </div>
              <div className='period2-left-elements'>
              {tableElements
              .map((i) => (
                <div className="card-element">
                  <div>{i.atomicNumber}</div>
                  <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                    {i.symbol}
                  </div>
                  <div>{i.name}</div>
                  <div>{i.atomicMass}</div>
                </div>
              ))
              .splice(4, 6)}
              </div>
          </div>
          <div className="period3">
            <div className='period2-left-elements'>
            {tableElements
              .map((i) => (
                <div className="card-element">
                  <div>{i.atomicNumber}</div>
                  <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                    {i.symbol}
                  </div>
                  <div>{i.name}</div>
                  <div>{i.atomicMass}</div>
                </div>
              )).splice(10, 2)}
              </div>
              <div className='period2-left-elements'>
            {tableElements
              .map((i) => (
                <div className="card-element">
                  <div>{i.atomicNumber}</div>
                  <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                    {i.symbol}
                  </div>
                  <div>{i.name}</div>
                  <div>{i.atomicMass}</div>
                </div>
              ))
              .splice(12, 6)}
              </div>
          </div>
          <div className="period4">
            {tableElements
              .map((i) => (
                <div className="card-element">
                  <div>{i.atomicNumber}</div>
                  <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                    {i.symbol}
                  </div>
                  <div>{i.name}</div>
                  <div>{i.atomicMass}</div>
                </div>
              ))
              .splice(18, 18)}
          </div>
          <div className="period5">
            {tableElements
              .map((i) => (
                <div className="card-element">
                  <div>{i.atomicNumber}</div>
                  <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                    {i.symbol}
                  </div>
                  <div>{i.name}</div>
                  <div>{i.atomicMass}</div>
                </div>
              ))
              .splice(36, 18)}
          </div>
          <div className="period6">
            {tableElements
              .map((i) => (
                <div className="card-element">
                  <div>{i.atomicNumber}</div>
                  <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                    {i.symbol}
                  </div>
                  <div>{i.name}</div>
                  <div>{i.atomicMass}</div>
                </div>
              ))
              .splice(54, 18)}
          </div>
          <div className="period7">
            {tableElements
              .map((i) => (
                <div className="card-element">
                  <div>{i.atomicNumber}</div>
                  <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                    {i.symbol}
                  </div>
                  <div>{i.name}</div>
                  <div>{i.atomicMass}</div>
                </div>
              ))
              .splice(72, 18)}
          </div>
        </div>
        <div className="lanthanoides">
          {lanthanoides.map((i) => (
            <div className="card-element">
              <div>{i.atomicNumber}</div>
              <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                {i.symbol}
              </div>
              <div>{i.name}</div>
              <div>{i.atomicMass}</div>
            </div>
          ))}
        </div>
        <div className="actinoides">
          {actinoides.map((i) => (
            <div className="card-element">
              <div>{i.atomicNumber}</div>
              <div style={{ fontWeight: "bolder", fontSize: "10px" }}>
                {i.symbol}
              </div>
              <div>{i.name}</div>
              <div>{i.atomicMass}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
