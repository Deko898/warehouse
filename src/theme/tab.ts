import { palette } from './palette';

export const MuiTab = {
    root: {
        minWidth: '72px !important',
        borderRadius: '4px',
        textTransform: 'capitalize',
        "&$selected": {
            backgroundColor: palette.secondary.main,
            color: '#fff',
            borderBottom: 'none'
        }
    }
}
