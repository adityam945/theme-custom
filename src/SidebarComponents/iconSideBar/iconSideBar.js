import React, { useState } from "react";

import "./iconSideBar.css";
//
//
const OpensideDrawer = (props) => {
  const [drawerClasses, setdrawerClasses] = useState("side-drawer-icon");
  if (props.iconDrawerToggleClickHandler) {
    setdrawerClasses("side-drawer-icon open");
  }
  return (
    <div className="side-drawer-icon">
      <a>Icons</a>
      {drawerClasses}
    </div>
  );
};

export default OpensideDrawer;
