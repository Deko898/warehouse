import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './insights.styles';
import { BarChart } from "../../charts/Bar";
import { LineChart } from "../../charts/Line";
import { OperatingProfit } from "../../charts/OperatingProfit";
import { CustomerCost } from "../../charts/CustomerCost";
import { CustomerSideBySide } from '../../charts/CustomerSideBySide';
import { RevenueProjectionBar }  from '../../charts/RevenueProjectionBar';
import FinansicalStats from '../../charts/FinansicalStats';
import { NetIncomeProjectionBar } from '../../charts/NetIncomeProjectionBar';
import { CashBalanceLine } from '../../charts/CashBalanceLine';

export default function Insights() {
	const classes = useStyles();
	return (
		<div className={classes.chartWrapper}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={7} md={7}>
					<Grid container  spacing={1}>
						<Grid item xs={12} sm={7} md={7}>
							<RevenueProjectionBar />
						</Grid>
						<Grid item xs={12} sm={5} md={5}>
						<CashBalanceLine />
						</Grid>
					</Grid>

					<Grid container  spacing={1}>
						<Grid item xs={12} sm={4} md={4}>
							<FinansicalStats />
						</Grid>
						<Grid item xs={12} sm={8} md={8}>
							<NetIncomeProjectionBar />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={5} md={5}>
					<BarChart height={480}/>
				</Grid>
			</Grid>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6} md={3}>
					<CustomerSideBySide />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					{/* <PieChart /> */}
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
