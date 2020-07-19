import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadContainer: {
      padding: theme.spacing(2),
      '& .dropContainer': {
        marginTop: theme.spacing(1)
      }

    },
    uploadContent: {
      padding: theme.spacing(1, 0),
    },
    mLeft: {
      marginLeft: theme.spacing(1),
    },
    button: {
      textTransform: "none",
    },
    input: {
      display: "none",
    },
  })
);