import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: theme.palette.secondary.main,
            color: '#fff',
            '& text': {
                fill: '#fff'
            }
        },
    })
);
