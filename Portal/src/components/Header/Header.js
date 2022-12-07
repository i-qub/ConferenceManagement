import React, { useState } from "react";
import { getUser, removeUserSession } from "../Utils/Common";

import logo from "./logo.png";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import {
  ExitToAppOutlined as ExitToAppOutlinedIcon,
  Menu as MenuIcon,
  Lock as LockIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import { Badge, Typography } from "../Wrappers";
import Notification from "../Notification/Notification";

import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const notifications = [
  { id: 0, color: "warning", message: "Check out this awesome ticket" },
  {
    id: 1,
    color: "success",
    type: "info",
    message: "What is the best way to get ...",
  },
  {
    id: 2,
    color: "secondary",
    type: "notification",
    message: "This is just a simple notification",
  },
  {
    id: 3,
    color: "primary",
    type: "e-commerce",
    message: "12 new orders has arrived today",
  },
];

export default function Header(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [notificationsMenu, setNotificationsMenu] = useState(null);
  var [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  var [profileMenu, setProfileMenu] = useState(null);

  const user = getUser();

  const Profile = () => {
    props.history.push("/userprofile");
  };

  // handle click event of logout button
  const logout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ backgroundColor: "#536DFE" }}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {layoutState.isSidebarOpened ? (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          )}
        </IconButton>
        <img
          src={logo}
          alt="logo"
          className={classes.logotypeImage}
          style={{ height: "40px" }}
        />

        <Typography variant="h6" weight="medium" className={classes.logotype}>
          Menon and Menon Ltd.
        </Typography>
        <div className={classes.grow} />
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          onClick={(e) => {
            setNotificationsMenu(e.currentTarget);
            setIsNotificationsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
          <Badge
            badgeContent={isNotificationsUnread ? notifications.length : null}
            color="warning"
          >
            <NotificationsIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={(e) => setProfileMenu(e.currentTarget)}
        >
          <AccountIcon classes={{ root: classes.headerIcon }} />
        </IconButton>
        <Menu
          id="notifications-menu"
          open={Boolean(notificationsMenu)}
          anchorEl={notificationsMenu}
          onClose={() => setNotificationsMenu(null)}
          className={classes.headerMenu}
          disableAutoFocusItem
        >
          {notifications.map((notification) => (
            <MenuItem
              key={notification.id}
              onClick={() => setNotificationsMenu(null)}
              className={classes.headerMenuItem}
            >
              <Notification {...notification} typographyVariant="inherit" />
            </MenuItem>
          ))}
        </Menu>
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h6" weight="bold">
              {user[0].name}
            </Typography>
          </div>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
            onClick={Profile}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Profile Details
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <LockIcon className={classes.profileMenuIcon} /> Change Password
          </MenuItem>
          <MenuItem
            className={classes.profileMenuLink}
            color="primary"
            onClick={logout}
          >
            <ExitToAppOutlinedIcon className={classes.profileMenuIcon} /> Sign
            Out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
