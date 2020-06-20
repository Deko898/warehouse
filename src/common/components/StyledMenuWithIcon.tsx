import React from "react";
import {
  withStyles,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& svg": {
        fontSize: "18px",
      },
    },
  })
);

interface IProps {
  color?: any;
  variant?: any;
  icon: any;
  items: any[];
  text?: string;
}

export default function StyledMenuWithIcon({
  color = "primary",
  variant,
  icon,
  items,
  text,
}: IProps) {
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
      <Button
        variant={variant}
        className={classes.root}
        color={color}
        onClick={handleClick}
        startIcon={<FontAwesomeIcon icon={icon} />}
      >
        {text ? text : ""}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((i) => (
          <StyledMenuItem key={i}>
            <ListItemText primary={i.text} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
