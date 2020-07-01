import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Hidden from "@material-ui/core/Hidden";
import Fab from "@material-ui/core/Fab";
import Avatar from "@material-ui/core/Avatar";
import user from "../../../assets/images/pic.jpg";
import Filters from "../AppBar/AppBarFilters";
import { Route, Redirect, Switch, useRouteMatch } from "react-router-dom";
import Routes from "../../../routes/AppRoutes";
import { useStyles, useGridStyles } from "./LayoutStyles";
import { useTheme } from "@material-ui/core/styles";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import StyledMenuWithIcon from "../Sidenav/StyledMenuWithIcon";
import NavigationBar from "../NavBar/NavigationBar";
import { Grid } from "@material-ui/core";

interface Props {
  window?: () => Window;
}
export default function Layout(props: Props) {
  const { url } = useRouteMatch();
  const { window } = props;
  const classes = useStyles();
  const gridClasses = useGridStyles();
  const theme = useTheme();
  let [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={gridClasses.container}>
            <Grid item xs={12} sm={4} md={6} className={gridClasses.root}>
              <img
                src="https://app.3linx.com/public/images/3linx-logo.png"
                alt="3linx"
              />
              <IconButton
                color="secondary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggleSm}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <div className={classes.filtersWrapper}>
                <Filters />
                <StyledMenuWithIcon
                  icon={faPowerOff}
                  items={[{ text: "Logout" }, { text: "Profile" }]}
                />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
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
            <Avatar alt="D" src={user} />
            <div className={classes.userInfo}>
              <div>Dejan Obradovikj</div>
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
              <Avatar alt="D" src={user} />
              <div className={classes.userInfo}>
                <div>Dejan Obradovikj</div>
                <div className={classes.userJobTitle}>Frontend Developer</div>
              </div>
            </div>
          ) : (
            <div className={classes.collapsedToolbar}>
              <Avatar alt="D" src={user} />
            </div>
          )}
          <div
            className={
              open ? classes.navigationLabel : classes.collapsedNavigationLabel
            }
          >
            Navigation
          </div>
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
        </Switch>
      </main>
    </div>
  );
}
