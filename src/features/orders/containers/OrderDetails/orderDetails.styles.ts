import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useCardContentStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    height: "392px",
    maxHeight: "392px",
    overflowY: "auto",
    padding: "0",
    "&:last-child": {
      paddingBottom: "0",
    },
  },
  leafletRoot: {
    height: "432px",
    maxHeight: "432px",
  },
  orderTopLayoutDetails: {
    display: "flex",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "18px",
    },
  },
  orderTopLayoutDetail: {
    display: "flex",
    marginRight: theme.spacing(2),
  },
  orderTopLayoutLabel: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
})
);

export const useItemTextStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .MuiTypography-root": {
      fontWeight: 700,
      whiteSpace: "nowrap",
    },
    "& .MuiTypography-colorTextSecondary": {
      width: "85%",
    },
  },
  secondaryItem: {
    width: "85%",
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: 700,
    "& p": {
      margin: 0,
    },
  },
  iconsWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    "& svg": {
      marginRight: theme.spacing(1),
    },
  },
})
);