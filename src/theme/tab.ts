import { palette } from './palette';

export const MuiTab = {
    root: {
        minWidth: '72px !important',
        textTransform: 'capitalize',
        "&$selected": {
            backgroundColor: palette.primary.main,
            color: '#fff',
        }
    }
}
