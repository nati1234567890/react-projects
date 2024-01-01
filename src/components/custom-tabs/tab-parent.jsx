import React from "react";
import Tabs from "./tabs";

function TabText() {
  const tabs = [
    {
      label: "Tab 1",
      content: "this contentis for tab 1",
    },
    {
      label: "Tab 2",
      content: "this contentis for tab 2",
    },
    {
      label: "Tab 3",
      content: "this contentis for tab 3",
    },
  ];

  return <Tabs tabsContent={tabs} />;
}

export default TabText;
