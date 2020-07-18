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
		month: 'Jan',
		sales: 20,
		engineering: 50,
		operations: 32,
		marketing: 18,
	},
	{
		month: 'Feb',
		sales: 25,
		engineering: 55,
		operations: 37,
		marketing: 23,
	},
	{
		month: 'Mar',
		sales: 16,
		engineering: 41,
		operations: 22,
		marketing: 12,
	},
	{
		month: 'Apr',
		sales: 19,
		engineering: 45,
		operations: 29,
		marketing: 15,
	},
	{
		month: 'May',
		sales: 20,
		engineering: 50,
		operations: 32,
		marketing: 18,
	},
];

const textComponent: any = () => (
    <div>
        <div>Payroll by Department</div>
        <div style={{ fontSize: '25px', fontWeight: 'bold' }}>61%
        </div>
        <div>Total Payroll as % of Revenue</div>
    </div>
)

export const PayrollByDepartment: React.FunctionComponent = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Chart data={data} height={400}>
				<ArgumentAxis />
				<ValueAxis />

				<BarSeries
					name='Male: 0-10'
					valueField='sales'
					argumentField='month'
				/>
				<BarSeries
					name='Male: 11-20'
					valueField='engineering'
					argumentField='month'
					color='#57b4ff'
				/>
				<BarSeries
					name='Male: 20-40'
					valueField='operations'
					argumentField='month'
					color='#6bbdff'
				/>
				<BarSeries
					name='Male: 40 and older'
					valueField='marketing'
					argumentField='month'
					color='#b5deff'
				/>
				<Animation />
				<Title textComponent={textComponent} />
				<Stack
					stacks={[
						{
							series: [
								'Male: 0-10',
								'Male: 11-20',
								'Male: 20-40',
								'Male: 40 and older',
							],
						},
					]}
				/>
			</Chart>
		</Paper>
	);
};
