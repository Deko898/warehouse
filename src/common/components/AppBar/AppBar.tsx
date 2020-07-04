import React from "react";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import StyledMenuWithIcon from "../Sidenav/StyledMenuWithIcon";
import Filters from "../AppBar/AppBarFilters";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles, useGridStyles } from "./styles/appBar.styles";
import { connect } from "react-redux";
import { requestLogoutAction } from "../../../store/modules/auth/actions";
import { useHistory } from "react-router-dom";

interface IProps {
  logout: Function;
  handleDrawerToggleSm: any;
}

const AppHeader: React.FC<IProps> = ({ logout, handleDrawerToggleSm }) => {
  const classes = useStyles();
  const gridClasses = useGridStyles();
  const history = useHistory();

  const handleLogout = (item: string) => {
    if (item === "Logout") {
      logout(history);
    }
  };
  return (
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
                handleItemClick={handleLogout}
                items={[{ text: "Profile" }, { text: "Logout" }]}
              />
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: (history: any) =>
      dispatch(
        requestLogoutAction({
          callback: () => history.push("/login"),
        })
      ),
  };
};

export default connect(null, mapDispatchToProps)(AppHeader);
