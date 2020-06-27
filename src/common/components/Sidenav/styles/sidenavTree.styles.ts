import {
    makeStyles,
    createStyles,
    Theme,
    withStyles,
} from "@material-ui/core/styles";

export const useTreeItemStyles = makeStyles((theme) => ({
    content: {
    },
    labelRoot: {
        display: "flex",
        alignItems: "center",
    },
    labelIcon: {
        marginRight: theme.spacing(1),
    },
    labelText: {
        fontWeight: "inherit",
        flexGrow: 1,
    },
    labelCircleRoot: {
        width: "24px",
        height: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    labelCircle: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "rgba(255,255,255,.6)",
    },
    active: {
        "& .MuiTreeItem-root": {
            "& *": {
                color: "#fff",
            },
        },
    },
}));

export const useStyles = makeStyles({
    root: {
      height: 216,
      flexGrow: 1,
      maxWidth: 400,
    },
    treeItem: {
      "& .MuiTreeItem-content": {
        backgroundColor: "unset !important",
      },
    },
  });