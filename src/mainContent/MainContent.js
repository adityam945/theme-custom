import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

export default function MainContent(props) {
  return (
    <div>
      <div
        style={{
          marginTop: 200,
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 300,
        }}
      >
        <Button
          className="buttonStyle"
          onClick={() => props.changeTheme("light")}
        >
          Light
        </Button>
        <Button
          className="buttonStyle"
          onClick={() => props.changeTheme("dark")}
        >
          Dark
        </Button>
        <Button
          className="buttonStyle"
          onClick={() => props.changeTheme("gray")}
        >
          Gray
        </Button>
      </div>
      <div>
        Toolbar
        <Button
          className="buttonStyle"
          onClick={() => props.changeThemeToolBar("#e53935")}
          style={{ backgroundColor: "#e53935" }}
        >
          Red
        </Button>
        <Button
          className="buttonStyle"
          onClick={() => props.changeThemeToolBar("#1e88e5")}
          style={{ backgroundColor: "#1e88e5" }}
        >
          blue
        </Button>
        <Button
          className="buttonStyle"
          onClick={() => props.changeThemeToolBar("#5e35b1")}
          style={{ backgroundColor: "#5e35b1" }}
        >
          deepPurple
        </Button>
        <div>
          <Slider
            value={props.heightToolbar}
            onChange={props.handleChangeHeightToolbar}
            aria-labelledby="continuous-slider"
            style={{ width: 200 }}
          />
        </div>
        {/* {heightToolbar} */}
        <Button onClick={() => props.hideSideBar("IconSideBar")}>
          Icon Side Bar
        </Button>
        <Button onClick={() => props.hideSideBar("OpensideDrawer")}>
          Open Side Bar
        </Button>
      </div>
    </div>
  );
}
