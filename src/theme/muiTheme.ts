import { createMuiTheme } from '@material-ui/core/styles';
import { MuiDrawer } from './muiDrawer';
import { MuiAppBar } from './appBar';
import { MuiTabs } from './tabs';
import { palette } from './palette';

export const muiTheme = createMuiTheme({
    typography: {
        // useNextVariants: true,
    },
    palette,
    shape: {
        borderRadius: 8
    },
    overrides: {
        MuiDrawer,
        MuiAppBar,
        MuiTabs,
        MuiButton: {
            root: {
                borderRadius: 0,
            },
        },
        MuiTab: {
            root: {
                minWidth: '72px !important',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px',
                textTransform: 'capitalize',
                fontWeight: 600,
                color: '#6f8293',
                "&$selected": {
                    backgroundColor: palette.secondary.main,
                    color: '#fff',
                    borderBottom: 'none'
                }
            },

        }
    }
},
);