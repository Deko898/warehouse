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
      maxWidth: '300px',
      '& .MuiSelect-root': {
        '& strong': {
          marginRight: theme.spacing(1)
        }
      }
    },
  })
);

export const useSelectStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: '290px',
      display: 'flex',
      '& strong': {
        width: '30%',
        // marginRight: theme.spacing(2)
      },
      '& span': {
        flex: 1
      }
    }
  })
);