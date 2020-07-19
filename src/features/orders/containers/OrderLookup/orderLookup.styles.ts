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
    datePicker: {
      flex: 1,
      margin: theme.spacing(1),
      "&:last-child": {
        marginRight: 0,
      },
    },
    dateRangeWrapper: {
      flex: 1,
      position: 'relative',
      height: '40px',
      border: '1px solid rgba(0, 0, 0, 0.23)',

      '& >div': {
        position: 'absolute',
        top: '40px'
      }
    }
  })
);
