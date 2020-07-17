import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";

import { Stack, Animation } from "@devexpress/dx-react-chart";

import { population as data } from "./mock-data/sideBySideDemoData";
import { useStyles } from "./styles/chart.styles";

export const SideBySideStacked: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Chart data={data} height={400}>
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries
          name="Male: 0-14"
          valueField="maleyoung"
          argumentField="state"
        />
        <BarSeries
          name="Male: 15-64"
          valueField="malemiddle"
          argumentField="state"
        />
        <BarSeries
          name="Male: 65 and older"
          valueField="maleolder"
          argumentField="state"
        />
        <BarSeries
          name="Female: 0-14"
          valueField="femaleyoung"
          argumentField="state"
        />
        <BarSeries
          name="Female: 15-64"
          valueField="femalemiddle"
          argumentField="state"
        />
        <BarSeries
          name="Female: 65 and older"
          valueField="femaleolder"
          argumentField="state"
        />
        <Animation />
        <Title text="Orders: Country" />
        <Stack
          stacks={[
            { series: ["Male: 0-14", "Male: 15-64", "Male: 65 and older"] },
            {
              series: ["Female: 0-14", "Female: 15-64", "Female: 65 and older"],
            },
          ]}
        />
      </Chart>
    </Paper>
  );
};
