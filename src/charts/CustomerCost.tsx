import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	BarSeries,
	Title,
	ArgumentAxis,
	ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data: any = [
	{ year: '1950', population: 2.525 },
	{ year: '1960', population: 3.018 },
	{ year: '1970', population: 3.682 },
	{ year: '1980', population: 4.44 },
	{ year: '1990', population: 5.31 },
];

export const CustomerCost: React.FunctionComponent = () => {
	return (
		<Paper>
			<Chart data={data} rotated height={240}>
				<ArgumentAxis />
				<ValueAxis />

				<BarSeries valueField='population' argumentField='year' />
				<Title text='World population' />
				<Animation />
			</Chart>
		</Paper>
	);
};
