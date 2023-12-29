import React, { useState } from "react";
import data from "./data";
import "./style.css";
function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enablemultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);
  function handleSingleSelection(getcurrentid) {
    setSelected(getcurrentid === selected ? null : getcurrentid);
  }
  function handlemultiSelection(getcurrentid) {
    let copyMultiple = [...multiple];
    const findeIndexOfCurrentId = copyMultiple.indexOf(getcurrentid);
    if (findeIndexOfCurrentId === -1) {
      copyMultiple.push(getcurrentid);
    } else copyMultiple.splice(findeIndexOfCurrentId, 1);

    setmultiple(copyMultiple);
    console.log(multiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setenableMultiSelection(!enablemultiSelection)}>
        Enable multi selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enablemultiSelection
                    ? () => handlemultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="data">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data Found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
