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

const textComponent: any = () => (
	<div>
		<div>New vs Churned Customers</div>
		<div style={{ fontSize: '25px', fontWeight: 'bold' }}>42</div>
		<div>Net New Customers MTD</div>
	</div>
);
 const population: any = [{
    month: 'May', newCustomer: 26, chunedCustomer: 2,
  }, {
    month: 'Jun', newCustomer: 28, chunedCustomer: 4,
  }, {
    month: 'Jul', newCustomer: 19, chunedCustomer: 3,
  }, {
    month: 'Aug', newCustomer: 27, chunedCustomer: 2,
  }, {
    month: 'Sep', newCustomer: 32, chunedCustomer: 3,
  }, {
    month: 'Oct', newCustomer: 16, chunedCustomer: 1,
  }, {
    month: 'Nov', newCustomer: 38, chunedCustomer:0,
  },{
    month: 'Dec', newCustomer: 39, chunedCustomer: 2,
  },{
    month: 'Jan', newCustomer: 36, chunedCustomer: 1,
  },{
    month: 'Feb', newCustomer: 44, chunedCustomer: 4,
  },{
    month: 'Mar', newCustomer: 51, chunedCustomer: 3,
  },{
    month: 'Apr', newCustomer: 44, chunedCustomer: 2,
  }
];
export const CustomerSideBySide: React.FunctionComponent = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Chart data={population} height={400}>
				<ArgumentAxis />
				<ValueAxis />

				<BarSeries
					name='NewCustomer: 0-14'
					valueField='newCustomer'
					argumentField='month'
				/>
				<BarSeries
					name='ChunedCustomer: 65 and older'
					valueField='chunedCustomer'
					argumentField='month'
				/>
				<Animation />
				<Title textComponent={textComponent} />
				<Stack
					stacks={[
						{ series: ['NewCustomer: 0-14', 'NewCustomer: 65 and older'] },
						{
							series: ['ChunedCustomer: 0-14', 'ChunedCustomer: 65 and older'],
						},
					]}
				/>
			</Chart>
		</Paper>
	);
};
