import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appTabMenuWrapper: {

    },
    root: {
      fontSize: "14px",
      borderRadius: "unset",
      color: theme.palette.secondary.main,
      "& .MuiListItem-root": {
        color: theme.palette.secondary.main,
      },
    },
    gutters: {
      color: theme.palette.secondary.main,
    },
  })
);
