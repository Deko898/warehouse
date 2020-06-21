import {
    createStyles,
    makeStyles,
    Theme,
} from "@material-ui/core/styles";
import { variables } from "../../theme/variables";

const drawerWidth = 220;

export const useStyles = makeStyles((theme: Theme) =>
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
        filtersWrapper: {
            display: "flex",
            alignItems: "center"
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
                width: theme.spacing(6) + 2
            },
        },
        toolbar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: theme.spacing(0, 2),
            ...theme.mixins.toolbar,
            "& img": {
                height: "44px",
            },
        },
        drawerToolbar: {
            display: "flex",
            padding: theme.spacing(2),
            background: variables.darkBg,
        },
        collapsedToolbar: {
            display: "flex",
            justifyContent: 'center',
            padding: theme.spacing(1, 0),
            background: variables.darkBg,
        },
        userInfo: {
            marginLeft: "12px",
        },
        userJobTitle: {
            color: "#b1b5b8",
            fontSize: "12px",
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
        collapsedNavigationLabel: {
            display: 'none'
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(0, 2),
            marginTop: "64px",
            overflowX: 'hidden',
            [theme.breakpoints.down("xs")]: {
                marginTop: "112px",
            },
        },
    })
);