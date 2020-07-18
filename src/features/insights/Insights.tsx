import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './insights.styles';
import { BarChart } from "../../charts/Bar";
import { SideBySideStacked } from "../../charts/SideBySideStackedBar";
import { LineChart } from "../../charts/Line";
import { OperatingProfit } from "../../charts/OperatingProfit";
import { CustomerCost } from "../../charts/CustomerCost";

export default function Insights() {
	const classes = useStyles();
	return (
		<div className={classes.chartWrapper}>
			<Grid container spacing={2}>
				<Grid container spacing={1} xs={12} sm={7} md={7}>
					<Grid container spacing={1} className={classes.paddingRow}>
						<Grid item xs={12} sm={7} md={7}>
							<BarChart height={240}/>
						</Grid>
						<Grid item xs={12} sm={5} md={5}>
							<BarChart height={240}/>
						</Grid>
					</Grid>

					<Grid container spacing={1} className={classes.paddingRow}>
						<Grid item xs={12} sm={4} md={4}>
							<BarChart height={240}/>
						</Grid>
						<Grid item xs={12} sm={8} md={8}>
							<BarChart height={240}/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={5} md={5}>
					<BarChart height={480}/>
				</Grid>
			</Grid>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6} md={3}>
					<SideBySideStacked />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<LineChart />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<OperatingProfit />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<CustomerCost />
				</Grid>
			</Grid>
		</div>
	);
}
