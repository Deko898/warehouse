import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

import { useStyles } from "./styles/chart.styles";

const format = () => (tick: any) => tick;

const ValueLabel = (props: any) => {
  const { text } = props;
  return <ValueAxis.Label {...props} text={`$${text}k`} />;
};

 const confidence: any = [
    {
      month: 'Apr 1', cash: 800,
    }, {
      month: 'Apr 9',  cash: 410, 
    }, {
      month: 'Apr 17',  cash: 650, 
    }, {
      month: 'Apr 25',  cash: 410, 
    }, {
      month: 'May 3',  cash: 600, 
    }, {
      month: 'May 11',  cash: 410, 
    }, {
      month: 'May 19',  cash: 600, 
    }, {
      month: 'May 27',  cash: 220, 
    }, {
      month: 'Jun 4',  cash: 180, 
    }, {
      month: 'jun 12',  cash: 220, 
    }, {
      month: 'Jun 20',  cash: 180,
    }, {
      month: 'Jun 26', cash: 220, 
    }
  ];

  const textComponent: any = () => (
    <div>
        <div>Cash Balance</div>
        <div style={{ fontSize: '25px', fontWeight: 'bold' }}>$385.3k
        </div>
        <div>Curent Cash On-Hand</div>
    </div>
)
export const CashBalanceLine: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Chart data={confidence} height={250}>
        <ArgumentAxis tickFormat={format} />
        <ValueAxis labelComponent={ValueLabel} />

        <LineSeries name="Cash" valueField="cash" argumentField="month" />

        <Title
          textComponent={textComponent}
        />
        <Animation />
      </Chart>
    </Paper>
  );
};
