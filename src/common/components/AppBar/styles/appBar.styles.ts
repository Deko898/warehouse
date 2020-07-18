import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            '& .MuiButtonBase-root': {
                minWidth: 'unset',
                padding: '0px !important',
                '& .MuiButton-startIcon': {
                    marginLeft: theme.spacing(1),
                    marginRight: 0
                }
            }
        },
        logoWrapper: {
            display: 'flex',
            alignItems: 'center',
            '& p': {
                marginLeft: '4px',
                color: theme.palette.secondary.main,
                marginBottom: '-37px',
                fontSize: '10px',
                marginTop: '0'
            }
        },
        menuButton: {
            [theme.breakpoints.up("sm")]: {
                display: "none",
            },
        },
        toolbar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: theme.spacing(0, 2),
            ...theme.mixins.toolbar,
            "& img": {
                height: "44px",
            },
            [theme.breakpoints.down("xs")]: {
                padding: theme.spacing(2),
                "& img": {
                    height: "40px",
                },
            }
        },
        filtersWrapper: {
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("xs")]: {
                borderTop: `1px solid ${theme.palette.background.default}`,
                paddingTop: theme.spacing(1.5)
            },
        },
    })
);

export const useGridStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down("xs")]: {
            paddingBottom: theme.spacing(1.5)
        },
    }
}))