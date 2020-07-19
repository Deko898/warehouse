import { createMuiTheme } from '@material-ui/core/styles';
import { MuiDrawer } from './muiDrawer';
import { MuiAppBar } from './appBar';
import { MuiTabs } from './tabs';
import { palette } from './palette';

export const muiTheme = createMuiTheme({
	typography: {
		fontFamily: `"Roboto", sans-serif`,
		fontSize: 14,
	},
	palette,
	shape: {
		borderRadius: 0,
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
				textTransform: 'capitalize',
				fontWeight: 600,
				color: '#6f8293',
				'&$selected': {
					backgroundColor: palette.background.default,
				},
			},
		},
		MuiTableRow: {
			head: {
				backgroundColor: palette.secondary.dark,
			},
		},
		MuiTableCell: {
			head: {
				color: '#fff',
				'& .MuiCheckbox-root': {
					color: '#fff',
				},
			},
		},
		MuiTableSortLabel: {
			root: {
				'&:hover': {
					color: '#fff',
					opacity: '0.7',
				},
			},
			active: {
				color: '#fff !important',
			},
			icon: {
				color: '#fff !important',
			},
		},
		MuiListItem: {
			root: {
				'&$button': {
					'&:hover': {
						background: palette.primary.dark,
						'& *': {
							color: '#fff',
						},
					},
				},
				'&$selected': {
					background: palette.primary.main,
					'& *': {
						color: '#fff',
					},
					'&:hover': {
						background: `${palette.primary.main} !important`,
					},
				},
			},
		},
		MuiIcon: {
			root: {
				fontSize: '18px',
			},
		},
		MuiTypography: {
			body1: {
				fontSize: '14px',
			},
		},
		MuiList: {
			padding: {
				paddingTop: 0,
				paddingBottom: 0,
			},
		},
		MuiCardHeader: {
			root: {
				background: palette.secondary.dark,
				color: palette.secondary.contrastText,
				padding: '8px 16px',
			},
			title: {
				fontSize: '18px',
			},
			subheader: {
				color: palette.secondary.contrastText,
			},
        },
        MuiCssBaseline: {
            '@global': {
              html: {
                fontFamily: `"Roboto", sans-serif`,
              },
            },
          },
	},
});
