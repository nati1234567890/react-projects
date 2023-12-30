import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggle(getCurrentLabel) {
    setDisplayChildren({
      ...displayChildren,
      [getCurrentLabel]: !displayChildren[getCurrentLabel],
    });
    console.log(displayChildren);
  }

  return (
    <li>
      <div className="menu-item" style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggle(item.label)}>
            {displayChildren[item.label] ? (
              <FaMinus color="white" size={25} />
            ) : (
              <FaPlus color="white" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
