import React from "react";
import TabItem from "./tabItem";
const TabBar = (props) => {
  const { tabBarState } = props;
  return (
    <nav className="nav-ul-li">
      <ul className="ul-header">
        {tabBarState.map((tabBarItem) => (
          <TabItem key={tabBarItem.id} tabBarItem={tabBarItem} />
        ))}
      </ul>
    </nav>
  );
};

export default TabBar;
