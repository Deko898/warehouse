import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";
import { useStyles } from "./styles/chart.styles";
import CardHeader from '@material-ui/core/CardHeader';

const data: any[] = [
  { month: "Jan", revenue: 60000 },
  { month: "Feb", revenue: 25000 },
  { month: "Mar", revenue: 81000 },
  { month: "Apr", revenue: 69000 },
  { month: "May", revenue: 15000 },
  { month: "Jun", revenue: 0 },
  { month: "Jul", revenue: 0 },
  { month: "Aug", revenue: 0 },
  { month: "Sep", revenue: 0 },
  { month: "Oct", revenue: 0 },
  { month: "Nov", revenue: 0 },
  { month: "Dec", revenue: 0 },
];

const textComponent: any = () => (
    <div>
        {/* <div>Net Income vs Projection</div> */}
        <div style={{ fontSize: '25px', fontWeight: 'bold' }}>$270.5k
            <span style={{marginLeft:'5px', fontSize:'14px', color: '#33bcbc'}}>
            <i className="fa fa-caret-up" aria-hidden="true" style={{verticalAlign: 'middle'}}></i>
              9%</span>
        </div>
        <div>YTD Sales</div>
    </div>
)

export const NetIncomeProjectionBar: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <CardHeader title="Net Income vs Projection"/>

      <Chart data={data} height={250}>
        <ArgumentAxis showLine={true} />
        <ValueAxis showLine={true} />

        <BarSeries valueField="revenue" argumentField="month" color='#33bcbc' />
        <Title textComponent={textComponent} />
        <Animation />
      </Chart>
    </Paper>
  );
};
