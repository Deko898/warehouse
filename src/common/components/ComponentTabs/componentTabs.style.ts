import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTabs-indicator": {
                top: 0
            }
        },
        tabSecondItem: {
            textAlign: 'left',
            fontSize: '20px',
        },
    })
);