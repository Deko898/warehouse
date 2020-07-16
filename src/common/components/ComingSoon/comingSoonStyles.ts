// import { makeStyles, Theme, createStyles } from "@material-ui/core";

// export const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         comingSoonContainer: {
//             display: 'flex',
//             justifyContent: 'center',
//             background: '#fff',
//             margin: theme.spacing(2, 0)
//         },
//     })
// );

import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useComingSoonStyles = makeStyles((theme: Theme) =>
    createStyles({
        paddingRow: {
            padding: theme.spacing(1, 1),
        },
        chartWrapper: {
            paddingBottom: theme.spacing(2),
        }
    })
);
export default useComingSoonStyles;