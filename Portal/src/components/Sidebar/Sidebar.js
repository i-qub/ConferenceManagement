import React, { useState, useEffect } from "react";
import { getUser } from "../Utils/Common";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  CalendarToday as CalendarTodayIcon,
  MonetizationOn as MonetizationOnIcon,
  Portrait as PortraitIcon,
  MenuBook as MenuBookIcon,
  EventBusy as EventBusyIcon,
  Group as GroupIcon,
  Person as PersonIcon,
  DonutLarge as DonutLargeIcon,
  ArrowBack as ArrowBackIcon,
  PersonPinCircle as PersonPinCircleIcon
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const hrMenu = [
  { id: 0, label: "Dashboard", link: "/dashboard", icon: <HomeIcon /> },
  { id: 1, label: "Contractor", link: "/contractor", icon: <PortraitIcon />, },
  // { id: 2, label: "Employees", link: "/employee", icon: <PersonIcon />, },
  // { id: 3, label: "Manpower", link: "/manpower", icon: <GroupIcon />, },
  // { id: 4, label: "Leave Management", link: "/leave", icon: <EventBusyIcon />, },
  // { id: 5, label: "Reports", link: "/reports", icon: <MenuBookIcon /> },
  // { id: 6, label: "Process Info", link: "/process", icon: <DonutLargeIcon />, },
  // { id: 7, label: "Attendance", link: "/attendance", icon: <CalendarTodayIcon />, },
  // { id: 8, label: "Salary Structure", link: "/salary", icon: <MonetizationOnIcon />, },
  // { id: 9, label: "Announcement", link: "/announcement", icon: <NotificationsIcon />, }
];

const hodMenu = [
  { id: 0, label: "Dashboard", link: "/dashboard", icon: <HomeIcon /> },
  // { id: 1, label: "Manpower", link: "/manpower", icon: <GroupIcon />, },
  { id: 1, label: "Contractor", link: "/contractor", icon: <PortraitIcon />, },
  // { id: 3, label: "Employees", link: "/employee", icon: <PersonIcon />, },
  // { id: 4, label: "Allocation", link: "/allocation", icon: <PersonPinCircleIcon />, },
  // { id: 5, label: "Process Info", link: "/process", icon: <DonutLargeIcon />, },
  // { id: 6, label: "Leave Management", link: "/leave", icon: <EventBusyIcon />, },
  // { id: 7, label: "Reports", link: "/reports", icon: <MenuBookIcon /> },
  // { id: 8, label: "Announcement", link: "/announcement", icon: <NotificationsIcon />, }
];

const contractorMenu = [
  { id: 0, label: "Dashboard", link: "/dashboard", icon: <HomeIcon /> },
  { id: 1, label: "Contractor", link: "/contractorNew", icon: <PortraitIcon />, },
  // { id: 1, label: "Employees", link: "/employee", icon: <PersonIcon />, },
  // { id: 2, label: "Leave Management", link: "/leave", icon: <EventBusyIcon />, },
  // { id: 3, label: "Attendance", link: "/attendance", icon: <CalendarTodayIcon />, },
  // { id: 4, label: "Announcement", link: "/announcement", icon: <NotificationsIcon />, }
];

const empMenu = [
  { id: 0, label: "Dashboard", link: "/dashboard", icon: <HomeIcon /> },
  { id: 1, label: "Contractor", link: "/contractorNew", icon: <PortraitIcon />, },
  { id: 2, label: "Work Location", link: "/location", icon: <PersonPinCircleIcon /> },
  // { id: 2, label: "Leave Management", link: "/leave", icon: <EventBusyIcon />, },
  // { id: 3, label: "Attendance", link: "/attendance", icon: <CalendarTodayIcon />, },
  // { id: 4, label: "Announcement", link: "/announcement", icon: <NotificationsIcon />, }
  
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();
  const user = getUser();
  var data = user[0].role;
  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <>
      <Drawer
        variant={isPermanent ? "permanent" : "temporary"}
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: isSidebarOpened,
            [classes.drawerClose]: !isSidebarOpened,
          }),
        }}
        open={isSidebarOpened}
      >
        <div className={classes.toolbar} />
        <div className={classes.mobileBackButton}>
          <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
            <ArrowBackIcon
              classes={{
                root: classNames(classes.headerIcon, classes.headerIconCollapse),
              }}
            />
          </IconButton>
        </div>
        <div>
          {(() => {
            if (data === 'hr') {
              return (
                <List className={classes.sidebarList}>
                  {hrMenu.map(link => (
                    <SidebarLink
                      key={link.id}
                      location={location}
                      isSidebarOpened={isSidebarOpened}
                      {...link}
                    />
                  ))}
                </List>
              )
            } 
            else if (data === 'hod') {
              return (
                <List className={classes.sidebarList}>
                  {hodMenu.map(link => (
                    <SidebarLink
                      key={link.id}
                      location={location}
                      isSidebarOpened={isSidebarOpened}
                      {...link}
                    />
                  ))}
                </List>
              )
            } 
            else if (data === 'employee') {
              return (             
                <List className={classes.sidebarList}>
                  {empMenu.map(link => (
                    <SidebarLink
                      key={link.id}
                      location={location}
                      isSidebarOpened={isSidebarOpened}
                      {...link}
                    />
                  ))}
                </List>
              )
            }
             else {
              return (
                <List className={classes.sidebarList}>
                  {contractorMenu.map(link => (
                    <SidebarLink
                      key={link.id}
                      location={location}
                      isSidebarOpened={isSidebarOpened}
                      {...link}
                    />
                  ))}
                </List>
              )
            }
          })()}
        </div>
      </Drawer>
    </>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
