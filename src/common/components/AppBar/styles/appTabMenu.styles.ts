import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: "14px",
      borderRadius: "unset",
      "& .MuiListItem-root": {
        color: "#000",
      },
    },
    selectedRoot: {
      color: theme.palette.primary.dark,
      borderBottom: `2px solid ${theme.palette.primary.dark}`,
    },
    gutters: {
      color: '#000',
    },
  })
);
