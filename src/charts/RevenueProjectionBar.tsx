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

const data: any[] = [
  { month: "Jan", revenue: 498900 },
  { month: "Feb", revenue: 450133 },
  { month: "Mar", revenue: 501299 },
  { month: "Apr", revenue: 554500 },
  { month: "May", revenue: 590223 },
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
        <div>Revenue vs Projection</div>
        <div style={{ fontSize: '25px', fontWeight: 'bold' }}>$2.60M
            <span style={{marginLeft:'5px', fontSize:'14px', color: '#33bcbc'}}>
            <i className="fa fa-caret-up" aria-hidden="true" style={{verticalAlign: 'middle'}}></i>
                54%</span>
        </div>
        <div>YTD Sales</div>
    </div>
)

export const RevenueProjectionBar: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Chart data={data} height={240}>
        <ArgumentAxis showLine={true} />
        <ValueAxis showLine={true} />

        <BarSeries valueField="revenue" argumentField="month" color='#33bcbc' />
        <Title textComponent={textComponent} />
        <Animation />
      </Chart>
    </Paper>
  );
};
