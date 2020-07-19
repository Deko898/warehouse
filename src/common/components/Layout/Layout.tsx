import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Hidden from "@material-ui/core/Hidden";
import Fab from "@material-ui/core/Fab";
import Avatar from "@material-ui/core/Avatar";
import { Route, Redirect, Switch, useRouteMatch } from "react-router-dom";
import Routes from "../../../routes/AppRoutes";
import NavigationBar from "../NavBar/NavigationBar";
import AppHeader from "../AppBar/AppBar";
import { useStyles } from "./LayoutStyles";
import { useTheme } from "@material-ui/core/styles";
import { IUser } from "../../../models";
import NoMatch from "../NoMatch/NoMatch";

interface Props {
  window?: () => Window;
}
export default function Layout(props: Props) {
  const { url } = useRouteMatch();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  let [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const user: IUser = JSON.parse(localStorage.getItem("3linxUser"));

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const handleDrawerToggleSm = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader handleDrawerToggleSm={handleDrawerToggleSm} />
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggleSm}
          classes={{
            paper: classes.drawer,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div className={classes.drawerToolbar}>
            <Avatar alt="D" src={user.avatar} />
            <div className={classes.userInfo}>
              <div>{user.fullName}</div>
              <div className={classes.userJobTitle}>Frontend Developer</div>
            </div>
          </div>
          <div className={classes.navigationLabel}>Navigation</div>
          <NavigationBar />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          onMouseEnter={() => toggleDrawer(true)}
          onMouseLeave={() => toggleDrawer(false)}
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          {open ? (
            <div className={classes.drawerToolbar}>
              <Avatar alt="D" src={user.avatar} />
              <div className={classes.userInfo}>
                <div>{user.fullName}</div>
                <div className={classes.userJobTitle}>{user.jobTitle}</div>
              </div>
            </div>
          ) : (
            <div className={classes.collapsedToolbar}>
              <Avatar alt="D" src={user.avatar} />
            </div>
          )}
          {/* <div
            className={
              open ? classes.navigationLabel : classes.collapsedNavigationLabel
            }
          >
          </div> */}
          <NavigationBar />
          <div className={classes.drawerFooter}>
            <Fab
              size="small"
              color="primary"
              aria-label="toggle"
              className={classes.footerBtn}
            >
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </Fab>
          </div>
        </Drawer>
      </Hidden>

      <main className={classes.content}>
        <Switch>
          <Route exact path={`${url}`}>
            {<Redirect to={`${url}orders`} />}
          </Route>
          {Routes.map((route: any) => (
            <Route
              path={`${url}${route.path}`}
              key={route.path}
              component={route.component}
            />
          ))}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
