import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Toolbar.css";
import { ThemeProvider } from "styled-components";
import { Button, Toolbar } from "../../Themes/globalStyles";
import { colorBlue, colorRed, colorDeepPurple } from "../../Themes/Themes";

const toolbar = (props) => (
  <Toolbar>
    {/* {props.chnageTheme} */}
    <header
      className="toolbar"
      style={{
        background: props.changeTheme,
        height: 56 + props.heightToolbar,
      }}
    >
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <a href="/"> Change Theme</a>
        </div>
        <div>
          {props.ViewSideBar === "IconSideBar" ? (
            <Button onClick={props.iconDrawerToggleClickHandler}>here</Button>
          ) : null}
        </div>
        <div className="spacer" />
        <div className="toolbar__toggle-button">
          <SettingsIcon
            onClick={props.drawerClickHandler}
            style={{ cursor: "pointer", color: "white", fontSize: 28 }}
            className="rotate"
          />
        </div>
      </nav>
    </header>
  </Toolbar>
);

export default toolbar;
