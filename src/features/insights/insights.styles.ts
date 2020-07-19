import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chartWrapper: {
            padding: theme.spacing(2, 0),
        },
        gridWrapper: {
            marginBottom: theme.spacing(1),
        }
    })
);
export default useStyles;