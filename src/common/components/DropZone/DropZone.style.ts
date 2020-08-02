import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            transform: 'translateY(-100 %)',
            '& p': {
                color: 'red',
                textAlign: 'center'
            }
        },
        dropContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            height: '150px',
            border: `4px solid ${theme.palette.primary.dark}`
        },
        dragEnter: {
            border: `4px solid ${theme.palette.primary.light}`
        },
        // uploadIcon: {
        //     width: '50px',
        //     height: '50px',
        //     background: 'url(../images/upload.png) no-repeat center center',
        //     backgroundSize: '100%',
        //     textAlign: 'center',
        //     margin: '0 auto',
        //     paddingTop: '30px'
        // },
        dropMessage: {
            textAlign: 'center',
            color: theme.palette.primary.main,
            fontFamily: 'Arial',
            fontSize: '20px'
        }
    })
);
