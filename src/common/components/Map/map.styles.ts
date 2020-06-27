import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mapRoot: {
      width: "100%",
      height: "100%",
    },
  })
);