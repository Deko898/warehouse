import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Hidden from "@material-ui/core/Hidden";
import Fab from "@material-ui/core/Fab";
import Avatar from "@material-ui/core/Avatar";
import user from "../../assets/images/pic.jpg";
import Filters from "./AppBarFilters";
import { Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "../../routes/AppRoutes";
import NavigationBar from "./NavigationBar";
import { useStyles } from "./LayoutStyles";
import { useTheme } from "@material-ui/core/styles";

interface Props {
  window?: () => Window;
}
export default function MiniDrawer(props: Props) {
  const { window } = props;
  const classes = useStyles();
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
          <img src="https://app.3linx.com/public/images/3linx-logo.png" alt="3linx" />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggleSm}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Filters />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggleSm}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
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
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
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
        <Route exact path="/">
          {<Redirect to="/orders" />}
        </Route>
        {Routes.map((route: any) => (
          <Route
            path={route.path}
            key={route.path}
            component={route.component}
          />
        ))}
      </main>
    </div>
  );
}
