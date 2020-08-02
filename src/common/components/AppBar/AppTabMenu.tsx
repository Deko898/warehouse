import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter, RouteComponentProps, NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import { useStyles } from "./styles/appTabMenu.styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

interface IProps extends RouteComponentProps {
  items: any[];
  parent: any;
}

const AppTabMenu = ({ items, parent, location, match: m }: IProps) => {
  let currentPath = window.location.pathname.split("/");
  //const match = "/config/integrations";
  const match = `/${currentPath[1]}/${currentPath[2]}`;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const activeRoute = (routeName: any) => {
    return location.pathname.includes(routeName) ? true : false;
  };

  return (
    <div className={classes.appTabMenuWrapper}>
      <IconButton
        onClick={handleClick}
        className={classes.root}
      >
        {parent.name}
        {open ? <ArrowDropUp /> : <ArrowDropDownIcon />}
      </IconButton>
      <StyledMenu
        id="customized"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((i) => {
          return (
            <NavLink
              to={`${match}${i.path}`}
              style={{ textDecoration: "none" }}
              key={i.path}
            >
              <MenuItem
                className={classes.gutters}
                selected={activeRoute(i.path)}
                onClick={handleClose}
              >
                <ListItemText primary={i.name} />
              </MenuItem>
            </NavLink>
          );
        })}
      </StyledMenu>
    </div>
  );
};

export default withRouter(AppTabMenu);
