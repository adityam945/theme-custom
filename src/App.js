import React, { useState } from "react";

//
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Themes/globalStyles";
import { lightTheme, darkTheme, grayTheme } from "./Themes/Themes";
import Button from "@material-ui/core/Button";

//
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
//
import OpensideDrawer from "./SidebarComponents/OpenSideBar/openSideBar";
import IconSideBar from "./SidebarComponents/iconSideBar/iconSideBar";
//
import MainContent from "./mainContent/MainContent";
import { Icon } from "@material-ui/core";
//

function App() {
  const [theme, setTheme] = useState("light");
  const [themeToolbar, setThemeToolbar] = useState("");

  const [sideDrawerOpen, setsideDrawerOpen] = useState(false);

  function changeTheme(type) {
    setTheme(type);
    setThemeToolbar("");

    // red;
  }
  function changeThemeToolBar(type) {
    setThemeToolbar(type);
    // red;
  }
  function setThemeProvider() {
    // setThemeToolbar("");
    if (theme === "light") {
      return lightTheme;
    } else if (theme === "dark") {
      return darkTheme;
    } else if (theme === "gray") {
      return grayTheme;
    }
  }

  let backdrop;

  // backdrop;
  //
  function drawerToggleClickHandler() {
    setsideDrawerOpen((prevState) => {
      return { setsideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }
  //
  function drawerToggleClickHandlerClose() {
    setsideDrawerOpen(false);
  }
  //
  function backdropClickHandler() {
    setsideDrawerOpen(false);
    // this.setState({sideDrawerOpen: false});
  }
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  //
  const [heightToolbar, setHeightToolbar] = useState(0);

  const handleChangeHeightToolbar = (event, newValue) => {
    setHeightToolbar(newValue);
  };

  //
  const [ViewSideBar, setViewSideBar] = useState("OpensideDrawer");

  //
  function hideSideBar(sideBarname) {
    setViewSideBar(sideBarname);
  }

  const [iconSideBar, setIconSideBar] = useState(false);
  function iconDrawerToggleClickHandler() {
    setIconSideBar((prevState) => {
      return { setIconSideBar: !prevState.iconSideBar };
    });
  }
  //
  return (
    <ThemeProvider theme={setThemeProvider}>
      <GlobalStyles />
      <Toolbar
        drawerClickHandler={drawerToggleClickHandler}
        changeTheme={themeToolbar}
        heightToolbar={heightToolbar}
        ViewSideBar={ViewSideBar}
        iconDrawerToggleClickHandler={iconDrawerToggleClickHandler}
      />
      <SideDrawer
        show={sideDrawerOpen}
        drawerClickHandler={drawerToggleClickHandlerClose}
        // themeToggler={themeToggler}
      />
      {backdrop}

      <main
        style={{ marginTop: 46 + heightToolbar, padding: 10, paddingLeft: 0 }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            {ViewSideBar === "OpensideDrawer" ? <OpensideDrawer /> : null}
            {ViewSideBar === "IconSideBar" ? (
              <IconSideBar sideBarState={iconSideBar} />
            ) : null}
            {/* <ViewSideBar /> */}
          </div>
          <div style={{ marginLeft: 10 }}>
            <MainContent
              changeTheme={changeTheme}
              changeThemeToolBar={changeThemeToolBar}
              heightToolbar={heightToolbar}
              handleChangeHeightToolbar={handleChangeHeightToolbar}
              // heightToolbar={heightToolbar}
              hideSideBar={hideSideBar}
            />

            {ViewSideBar}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
