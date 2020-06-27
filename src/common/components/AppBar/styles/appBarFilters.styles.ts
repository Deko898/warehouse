import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-flex",
      flex: 1,
      justifyContent: 'flex-end'
    },
    formControl: {
      marginRight: theme.spacing(1),
      flex: 1,
      maxWidth: '250px'
    },
  })
);