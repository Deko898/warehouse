import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tabSecondItem: {
            textAlign: 'left',
            fontSize: '20px'
        },
    })
);