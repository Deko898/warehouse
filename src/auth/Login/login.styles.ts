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
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        imageTitle: {
            fontWeight: 700,
            fontSize: '100px',
            color: '#fff',
            marginTop: '325px',
            background: '#000',
            opacity: 0.8,
            padding: '0 20px',
            '& p': {
                margin: 0
            }
        },
        slideOne: {
            backgroundImage: `url('https://uploads-ssl.webflow.com/5cee41df22e95a79c0962e26/5dcc4182e630b2cf65a52872_Bg.jpg')`
        },
        slideTwo: {
            backgroundImage: `url(${require("../../assets/images/miki.jpeg")})`
        },
        slideThree: {
            backgroundImage: `url(${require("../../assets/images/miki_house.jpg")})`
        },
        slideFour: {
            backgroundImage: `url(${require("../../assets/images/ny.jpg")})`
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
            '& h1': {
                margin: 0,
                marginBottom: theme.spacing(1),
                color: theme.palette.secondary.main
            },
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
            height: '57px',
            width: '173px',
            marginBottom: theme.spacing(4)
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
        },
        sliderContainer: {
            width: '100%',
            height: '100%',
            '& .slider': {
                height: '100vh',
            }
        },
        loginSubHeader: {
            color: '#8695af',
            fontWeight: 600,
            margin: theme.spacing(0)
        },

        lastFormRowWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: theme.spacing(2)
        }
    })
);