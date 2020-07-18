import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chartWrapper: {
            padding: theme.spacing(1, 0),
        }
    })
);
export default useStyles;