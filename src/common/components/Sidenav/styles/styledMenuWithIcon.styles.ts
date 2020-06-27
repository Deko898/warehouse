import {
    makeStyles,
    createStyles,
    Theme,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& svg": {
                fontSize: "18px",
            },
        },
    })
);
