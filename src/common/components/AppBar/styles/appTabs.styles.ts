import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appTabs: {
      marginBottom: theme.spacing(2),
      display: "flex",
      background: theme.palette.primary.contrastText,
      '& .Mui-selected': {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        background: theme.palette.primary.contrastText,
        '& .MuiButtonBase-root': {
          color: theme.palette.primary.main,
        },
      },
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    root: {
      padding: "0px",
    },
  })
);
