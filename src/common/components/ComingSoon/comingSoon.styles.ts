import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        comingSoonContainer: {
            display: 'flex',
            justifyContent: 'center',
            background: '#fff',
            margin: theme.spacing(2, 0)
        },
    })
);