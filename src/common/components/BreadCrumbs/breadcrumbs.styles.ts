import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breadCrumbWrapper: {
      textTransform: "capitalize",
      display: "flex",
      flexFlow: "column",
      flexDirection: "column-reverse",
    },
    iconWrapper: {
      display: "flex",
      alignItems: "center",
      "& h5": {
      },
    },
    root: {
      fontSize: "12px",
    },
  })
);