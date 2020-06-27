import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formWrapper: {
      padding: theme.spacing(2),
    },
    root: {
      "& .MuiListItem-root": {
        display: "flex",
        justifyContent: "space-between",
        width: "400px",
      },
    },
    formControlsWrapper: {
      display: "flex",
      alignItems: "center",
    },
    formControl: {
      flex: 1,
      margin: theme.spacing(1),
      "&:first-child": {
        marginLeft: 0,
      },
    },
  })
);
