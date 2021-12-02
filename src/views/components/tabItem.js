import React from "react";

const TabItem = (props) => {
  return (
    <li className="li-header">
      <img
        alt="entrega-img"
        className={props.tabBarItem.style}
        href="#"
        src={props.tabBarItem.image}
      />
      <a className="tagAall" href="#">
        {props.tabBarItem.value}
      </a>
    </li>
  );
};

export default TabItem;
