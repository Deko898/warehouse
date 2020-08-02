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
    uploadDropzoneContent: {
      display: 'flex',
      '& div': {
        flex: 1
      }
    },
    buttonsWrapper: {
      marginLeft: theme.spacing(2)
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
    filesContainer: {
      marginLeft: theme.spacing(2)
    },
    browseContainer: {
      border: `1px dashed #c3c3cc`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '44px',
      color: theme.palette.primary.main,
      textTransform: 'capitalize',
      '& span': {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        cursor: 'pointer'
      }
    },
    fileItem: {
      alignItems: 'center',
      display: 'flex',
      height: '44px',
      border: `1px solid #c3c3cc`,
      borderTop: 'unset',
      padding: theme.spacing(0, 2),
      justifyContent: 'space-between',
      '& svg': {
        cursor: 'pointer'
      }
    }
  })
);