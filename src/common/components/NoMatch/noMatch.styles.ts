import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        noMatchContainer: {
            height: '100vh',
            display: 'flex',
            flexFlow: 'column'
        },
        noMatchNumber: {
            color: theme.palette.secondary.main,
            fontSize: '200px',
            textShadow: '10px 10px 0 rgba(45, 53, 60, .2)',
            padding: theme.spacing(4),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1
        },
        noMatchDescription: {
            background: theme.palette.secondary.main,
            flex: 1,
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            padding: theme.spacing(4)
        },
        noMatchTitle: {
            color: '#fff',
            fontSize: '24px',
            letterSpacing: '.5px',
            marginBottom: '5px'
        },
        noMatchSubTitle: {
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, .6)',
            letterSpacing: '.5px',
            marginBottom: theme.spacing(6),

            '& p': {
                margin: theme.spacing(0.5)
            }
        }
    })
);