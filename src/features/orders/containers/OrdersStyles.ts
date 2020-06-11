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
            marginBottom: "15px",
        },
        exportBtn: {
            margin: theme.spacing(0, 2),
        },
        boxSeparator: {
            background: "#1d2226",
            color: "#fff",
            height: "40px",
        },
    })
);

export default useOrdersStyles;