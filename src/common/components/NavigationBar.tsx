import { withRouter, NavLink, RouteComponentProps } from "react-router-dom";
import {
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Icon,
} from "@material-ui/core";
import Routes from "../../routes/AppRoutes";
import React from "react";
import FolderIcon from "@material-ui/icons/Folder";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "unset",
      marginRight: theme.spacing(2),
      "& .MuiIcon-root": {
        display: "flex",
        justifyContent: "center",
      },
    },
  })
);

const NavigationBar: React.FunctionComponent<RouteComponentProps> = (props) => {
  const classes = useStyles();
  const activeRoute = (routeName: any) => {
    return props.location.pathname.includes(routeName) ? true : false;
  };
  return (
    <MenuList>
      {Routes.map((prop, key) => {
        return (
          <NavLink to={prop.path} style={{ textDecoration: "none" }} key={key}>
            <MenuItem selected={activeRoute(prop.path)}>
              <ListItemIcon className={classes.root}>
                <Icon className={prop.iconType} />
              </ListItemIcon>
              <ListItemText primary={prop.name} />
            </MenuItem>
          </NavLink>
        );
      })}
    </MenuList>
  );
};

export default withRouter(NavigationBar);
