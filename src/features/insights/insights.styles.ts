import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paddingRow: {
            padding: theme.spacing(1, 1),
        },
        chartWrapper: {
            paddingBottom: theme.spacing(2),
        }
    })
);
export default useStyles;