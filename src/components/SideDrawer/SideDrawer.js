import React from "react";

import "./SideDrawer.css";
import DrawerToggleButton from "./DrawerToggleButton";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import WebAssetIcon from "@material-ui/icons/WebAsset";
//

//
const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      {/* <ul> */}
      <div style={{ margin: 8, maxHeight: 100, minHeight: 40 }}>
        <CloseIcon
          onClick={props.drawerClickHandler}
          style={{ cursor: "pointer", color: "black" }}
          className="popout"
        />
      </div>
      <div style={{ marginTop: 20 }}></div>
      <Button onClick={props.themeToggler}>Theme</Button>
      {/* <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul> */}
      {/* <div style={{ marginTop: 20 }}>
        <Button onClick={props.changeTheme}>Light</Button>
        <Button onClick={props.changeTheme}>Dark</Button>
        <Button onClick={props.changeTheme}>Gray</Button>
      </div> */}
    </nav>
  );
};

export default sideDrawer;
