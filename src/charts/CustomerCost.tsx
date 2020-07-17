import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	BarSeries,
	Title,
	ArgumentAxis,
	ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, LineSeries } from '@devexpress/dx-react-chart';
import { useStyles } from "./styles/chart.styles";

const data: any = [
	{ month: 'May', cost: 12.5 },
	{ month: 'Apri', cost: 12.34 },
	{ month: 'Mar', cost: 11.23 },
	{ month: 'Feb', cost: 2 },
	{ month: 'Jan', cost: 10.95 },
];

export const CustomerCost: React.FunctionComponent = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root} >

			<Chart data={data} rotated height={400} >
				<ArgumentAxis />
				<ValueAxis />

				<BarSeries valueField='cost' argumentField='month' />
				<Title textComponent={() => <div>
					<span>Customer Acquisition Cost</span>
<div>$12.95</div>
<div>30 Day Average</div>
				</div>}/>
				<Animation />
			</Chart>
		</Paper>
	);
};
