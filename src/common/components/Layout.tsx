import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
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
// import CustomizedTreeView from "./Tree";
import SideNavTree from "./SideNavTree";
// import RecursiveTreeView from "./Tree";
import { variables } from "../../theme/variables";
import Avatar from "@material-ui/core/Avatar";
import user from "../../assets/images/pic.jpg";
import UserMenu from "./UserMenu";
import Filters from "./AppBarFilters";
import CollapsedSideNavigation from "./SideNavTreeCollapsed";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "../../routes/routes";
import FolderIcon from "@material-ui/icons/Folder";
import { ITreeRoute } from "./interfaces";

const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    hide: {
      display: "none",
    },
    drawer: {
      whiteSpace: "nowrap",
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerOpen: {
      top: "64px",
      width: drawerWidth,
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      top: "64px",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(0, 2),
      // justify-content: space-between;
      ...theme.mixins.toolbar,
      "& img": {
        height: "44px",
      },
    },

    drawerToolbar: {
      display: "flex",
      padding: "15px",
      background: variables.darkBg,
    },
    userJobTitle: {
      color: "#b1b5b8",
      fontSize: "12px",
      marginLeft: "12px",
    },
    drawerFooter: {
      position: "absolute",
      bottom: "117px",
      right: "20px",
    },
    footerBtn: {
      position: "fixed",
    },
    navigationLabel: {
      height: "40px",
      display: "flex",
      alignItems: "flex-end",
      padding: "10px 15px",
      fontSize: "10px",
      fontWeight: 700,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: "64px",
    },
  })
);
interface Props {
  window?: () => Window;
}
export default function MiniDrawer(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  let [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = () => {
    open = !open;
    setOpen(open);
  };

  const handleDrawerToggleSm = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const history = createBrowserHistory();
  const treeRoutes: ITreeRoute[] = [
    {
      nodeId: "1",
      name: "Dashboard",
      iconType: FolderIcon,
      children: [
        {
          nodeId: "2",
          name: "Dashboard 1",
          linkTo: "/dashboard",
        },
      ],
    },
    {
      nodeId: "3",
      name: "Orders",
      iconType: FolderIcon,
      children: [
        {
          nodeId: "4",
          name: "Manage Orders",
          children: [
            {
              nodeId: "5",
              name: "Orders Pipeline",
              linkTo: "/orders",
            },
          ],
        },
        {
          nodeId: "6",
          name: "Picking",
        },
      ],
    },
  ];
  const ref = React.createRef();
  return (
    // <Router history={history}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img src="https://app.3linx.com/public/images/3linx-logo.png" />
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
              <div>
                <UserMenu />
                <div className={classes.userJobTitle}>Frontend Developer</div>
              </div>
            </div>
          ) : (
            <div className={classes.drawerToolbar}>
              <Avatar alt="D" src={user} />
            </div>
          )}
          <div className={classes.navigationLabel}>Navigation</div>
          {open ? (
            <SideNavTree treeRoutes={treeRoutes} />
          ) : (
            <CollapsedSideNavigation />
          )}
          <div className={classes.drawerFooter}>
            <Fab
              size="small"
              color="secondary"
              aria-label="toggle"
              onClick={toggleDrawer}
              className={classes.footerBtn}
            >
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </Fab>
          </div>
        </Drawer>
      </Hidden>

      <main className={classes.content}>
        {/* <Switch> */}
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
        {/* </Switch> */}
      </main>
    </div>
  );
}
