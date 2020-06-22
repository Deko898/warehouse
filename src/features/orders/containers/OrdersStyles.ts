import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useOrdersStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(0),
            "&:last-child": {
                paddingBottom: "0px",
            },
        },
        ordersPiplineContainer: {},
        breadCrumbsAndInputsContainer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: theme.spacing(2, 0),
        },
        smallMenuVertical: {
            '& .MuiButtonBase-root': {
                minWidth: 'unset',
                padding: '0px !important',
                '& .MuiButton-startIcon': {
                    marginLeft: 0,
                    marginRight: 0
                }
            }
        },
        inputsContainer: {
            display: "flex",
            alignItems: "center"
        },
        createBtn: {
            margin: theme.spacing(0, 2),
        },
        chartWrapper: {
            paddingBottom: theme.spacing(2),
        }
    })
);
export default useOrdersStyles;