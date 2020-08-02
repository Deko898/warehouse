import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-flex",
      flex: 1,
      justifyContent: 'flex-end',
      [theme.breakpoints.down("sm")]: {
        justifyContent: 'unset',
      }
    },
    formControl: {
      marginRight: theme.spacing(1),
      flex: 1,
      maxWidth: '300px',
      '& .MuiSelect-root': {
        display: 'flex',
        '& strong': {
          marginRight: theme.spacing(1),
          display: 'inline-flex',
          alignItems: 'center',
          '& img': {
            marginRight: theme.spacing(1),
            height: '16px'
          }
        }
      }
    },
    childMargin: {
      marginLeft: theme.spacing(4)
    }
  })
);

export const useSelectStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: '290px',
      display: 'flex',
      borderBottom: `1px solid #cecece`,
      '& strong': {
        width: '30%',
        display: 'inline-flex',
        alignItems: 'center',
        '& img': {
          marginRight: theme.spacing(1),
          height: '16px'
        }
        // marginRight: theme.spacing(2)
      },
      '& span': {
        flex: 1
      }
    }
  })
);
