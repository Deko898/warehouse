import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chartWrapper: {
            padding: theme.spacing(2, 0),
        }
    })
);
export default useStyles;