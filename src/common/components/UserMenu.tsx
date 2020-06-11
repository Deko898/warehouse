import React from "react";
import {
  withStyles,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      height: "0",
      fontSize: "14px",
      "& .MuiSvgIcon-root": {
        color: "#fff",
      },
      "& .MuiIconButton-label": {
        color: "#fff",
      },
    },
  })
);

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

const StyledMenuItem = withStyles((theme) => ({
  root: {
    // height: "0",
    "&:focus": {
      backgroundColor: theme.palette.secondary.light,
      "& .MuiListItemIcon-root, & .MuiListItemText-secondary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function UserMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} className={classes.menuButton}>
        Dejan Obradovikj
        <ArrowDropDownIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <ListItemText primary="Inbox" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
