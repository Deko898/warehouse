import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	ArgumentAxis,
	ValueAxis,
	BarSeries,
	Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

import { useStyles } from './styles/chart.styles';

const data = [
	{
		month: 'May',
		serviceFee: 30000,
		consulting: 28000,
		integration: 30000,
		support: 11200,
	},
	{
		month: 'Jun',
		serviceFee: 25607,
		consulting: 55793,
		integration: 3727,
		support: 5300,
	},
	{
		month: 'Jul',
		serviceFee: 13493,
		consulting: 48983,
		integration: 5802,
		support: 5300,
	},
	{
		month: 'Aug',
		serviceFee: 9575,
		consulting: 43363,
		integration: 9024,
		support: 4300,
	},
	{
		month: 'Sep',
		serviceFee: 17306,
		consulting: 30223,
		integration: 1927,
		support: 5300,
	},
	{
		month: 'Oct',
		serviceFee: 6679,
		consulting: 28638,
		integration: 5133,
		support: 5300,
	},
	{
		month: 'Nov',
		serviceFee: 5816,
		consulting: 19622,
		integration: 3864,
		support: 5300,
	},
	{
		month: 'Dec',
		serviceFee: 5816,
		consulting: 19622,
		integration: 3864,
		support: 5300,
	},
	{
		month: 'Jan',
		serviceFee: 13493,
		consulting: 48983,
		integration: 5802,
		support: 5300,
	},
	{
		month: 'Feb',
		serviceFee: 13493,
		consulting: 48983,
		integration: 5802,
		support: 5300,
	},
	{
		month: 'Mar',
		serviceFee: 13493,
		consulting: 48983,
		integration: 5802,
		support: 5300,
	},
	{
		month: 'Apr',
		serviceFee: 13493,
		consulting: 48983,
		integration: 5802,
		support: 5300,
	},
];

const textComponent: any = () => (
    <div>
        <div>Revenue by Type</div>
        <div style={{ fontSize: '25px', fontWeight: 'bold' }}>$5.24M
        </div>
        <div>12 Month Trailing Revenue</div>
    </div>
)

export const RevenueByType: React.FunctionComponent = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Chart data={data} height={483}>
				<ArgumentAxis />
				<ValueAxis />

				<BarSeries
					name='Male: 0-10000'
					valueField='serviceFee'
                    argumentField='month'
				/>
				<BarSeries
					name='Male: 11000-20000'
					valueField='consulting'
					argumentField='month'
					color='#57b4ff'
				/>
				<BarSeries
					name='Male: 20000-40000'
					valueField='integration'
					argumentField='month'
					color='#6bbdff'
				/>
				<BarSeries
					name='Male: 40000 and older'
					valueField='support'
					argumentField='month'
					color='#b5deff'
				/>
				<Animation />
				<Title textComponent={textComponent} />
				<Stack
					stacks={[
						{
							series: [
								'Male: 0-10000',
								'Male: 11000-20000',
								'Male: 20000-40000',
								'Male: 40000 and older',
							],
						},
					]}
				/>
			</Chart>
		</Paper>
	);
};
