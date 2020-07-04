import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            '&:hover': {
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            },
            '& p': {
                fontSize: '12px',
                textTransform: 'uppercase',
                textAlign: 'center',
                color: '#8695af',
                fontWeight: 600,
                margin: theme.spacing(0)
            },
            '& .MuiCardActions-root': {
                justifyContent: 'center'
            }
        },
        comingSoonWrapper: {
            position: 'absolute',
            right: '-5px',
            top: '-5px',
            width: '100px',
            height: '100px',
            overflow: 'hidden'
        },
        comingSoon: {
            position: 'absolute',
            width: '130px',
            transform: 'rotate(45deg)',
            top: '25px',
            right: '-27px',
            background: 'linear-gradient(rgb(103, 63, 189) 0%, rgb(101, 105, 223) 100%)',
            boxShadow: '#000 0px 3px 10px -5px',
            lineHeight: '25px',
            color: 'rgb(255, 255, 255)',
            fontSize: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',

            "&::before": {
                content: '""',
                position: 'absolute',
                display: 'block',
                left: '0px',
                top: '100%',
                borderLeft: '3px solid rgb(103, 63, 189)',
                borderRight: '3px solid transparent',
                borderBottom: '3px solid transparent',
                borderTop: '3px solid rgb(103, 63, 189)',
            },

            "&::after": {
                content: '""',
                position: 'absolute',
                display: 'block',
                right: '0px',
                top: '100%',
                borderLeft: '3px solid transparent',
                borderRight: '3px solid rgb(103, 63, 189)',
                borderBottom: '3px solid transparent',
                borderTop: '3px solid rgb(103, 63, 189)',
            }
        }
    })
);