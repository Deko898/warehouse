import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useLoginStyles = makeStyles((theme: Theme) =>
    createStyles({
        loginWrapper: {
            display: 'flex',
            height: '100vh',
            '& > div': {
                flex: 1
            }
        },
        imgWrapper: {
            backgroundImage: `url('http://seantheme.com/color-admin/admin/assets/img/login-bg/login-bg-11.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%'
        },
        loginContentContainer: {
            background: theme.palette.primary.contrastText,
            width: '500px',
            minWidth: '500px',
            padding: theme.spacing(7),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: '0 !important',
            alignItems: 'center',
            [theme.breakpoints.down("md")]: {
                width: '400px',
                minWidth: '400px',
                padding: theme.spacing(6),
            },
            [theme.breakpoints.down("sm")]: {
                width: '300px',
                minWidth: '300px',
                padding: theme.spacing(5),
            },
            [theme.breakpoints.down("xs")]: {
                flex: '1 !important',
                width: 'unset',
                minWidth: 'unset',
            },
        },

        logoWrapper: {
            backgroundImage: `url('https://app.3linx.com/public/images/3linx-logo.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '44px',
            width: '134px'
        },

        formWrapper: {
            display: 'flex',
            flexFlow: 'column',
            paddingTop: theme.spacing(4),
            width: '100%',
            '& .MuiFormControl-root': {
                flex: 1,
                marginBottom: theme.spacing(2)
            },

            '& .MuiButton-root': {
                marginTop: theme.spacing(1)
            },
            
            '& .MuiFormControlLabel-root': {
                marginBottom: theme.spacing(2)
            }
        },
        formFooter: {
            width: '100%',
            textAlign: 'center',
            borderTop: `1px solid ${theme.palette.background.default}`,
            position: 'relative',
            top: '30%',

            '& p': {
                color: '#899297',
                fontSize: '14px'
            }
        }
    })
);