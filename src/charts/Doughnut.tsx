import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
  Legend,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";
import { withStyles } from "@material-ui/core";
import { EventTracker } from '@devexpress/dx-react-chart';

const data = [
  { region: "Asia", val: 4119626293 },
  { region: "Africa", val: 1012956064 },
  { region: "Northern America", val: 344124520 },
];

const legendStyles: any = () => ({
  root: {
    display: "flex",
    margin: "auto",
    flexDirection: "row",
    padding: 0,
  },
});
const legendRootBase: any = ({ classes, ...restProps }: any) => (
  <Legend.Root {...restProps} className={classes.root} />
);

const Root: any = withStyles(legendStyles, { name: "LegendRoot" })(
  legendRootBase
);

const legendLabelStyles: any = () => ({
  label: {
    whiteSpace: "nowrap",
  },
});
const legendLabelBase = ({ classes, ...restProps }: any) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label: any = withStyles(legendLabelStyles, { name: "LegendLabel" })(
  legendLabelBase
);

export const DoughnutChart: React.FunctionComponent = () => (
  <Paper>
    <Chart data={data} height={240}>
      <PieSeries valueField="val" argumentField="region" innerRadius={0.6} />
      <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
      <Title text="Orders Doughnut" />
      <Animation />
      <EventTracker />
      <Tooltip />
    </Chart>
  </Paper>
);
