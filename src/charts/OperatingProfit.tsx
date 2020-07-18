import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	ArgumentAxis,
	ValueAxis,
	LineSeries,
	Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import { useStyles } from './styles/chart.styles';

const format = () => (tick: any) => tick;
const ValueLabel = (props: any) => {
	const { text } = props;
	return <ValueAxis.Label {...props} text={`${text}%`} />;
};

const TitleText = () => (
		<div>Operating/Profit Margins</div>
);

const chartData: any = [
	{
		month: 'May',
		profit: -4,
		operating: 56,
	},
	{
		month: 'Jun',
		profit: 14,
		operating: 49,
	},
	{
		month: 'Jul',
		profit: 9,
		operating: 57,
	},
	{
		month: 'Aug',
		profit: 6,
		operating: 54,
	},
	{
		month: 'Sep',
		profit: 15,
		operating: 49,
	},
	{
		month: 'Oct',
		profit: 12,
		operating: 52,
	},
	{
		month: 'Nov',
		profit: 7,
		operating: 61,
	},
	{
		month: 'Dec',
		profit: 14,
		operating: 47,
	},
	{
		month: 'Jan',
		profit: 3,
		operating: 63,
	},
	{
		month: 'Feb',
		profit: 17,
		operating: 58,
	},
	{
		month: 'Mar',
		profit: 13,
		operating: 59,
	},
	{
		month: 'Apr',
		profit: -2,
		operating: 51,
	},
];
export const OperatingProfit: React.FunctionComponent = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Chart data={chartData} height={400}>
				<ArgumentAxis tickFormat={format} />
				<ValueAxis labelComponent={ValueLabel} />

				<LineSeries
					name='Profit Margin'
					valueField='profit'
					argumentField='month'
				/>
				<LineSeries
					name='Operating Margin'
					valueField='operating'
          argumentField='month'
          color='#33bcbc'
				/>

				<Title textComponent={TitleText} />
				<Animation />
			</Chart>
		</Paper>
	);
};
