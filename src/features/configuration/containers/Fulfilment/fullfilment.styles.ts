import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullfilmentWrapper: {
      padding: theme.spacing(2),
    },
  })
);