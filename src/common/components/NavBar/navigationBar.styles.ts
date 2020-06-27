import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
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