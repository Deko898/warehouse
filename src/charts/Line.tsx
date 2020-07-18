import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { Animation } from "@devexpress/dx-react-chart";

import { confidence as chartData } from "./mock-data/line.mock";
import { useStyles } from "./styles/chart.styles";

const format = () => (tick: any) => tick;

const ValueLabel = (props: any) => {
  const { text } = props;
  return <ValueAxis.Label {...props} text={`${text}%`} />;
};

const titleStyles: any = {
  title: {
    whiteSpace: "pre",
  },
};
const TitleText: any = withStyles(titleStyles)(({ classes, ...props }: any) => (
  <Title.Text {...props} className={classes.title} />
));

export const LineChart: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Chart data={chartData} height={240}>
        <ArgumentAxis tickFormat={format} />
        <ValueAxis labelComponent={ValueLabel} />

        <LineSeries name="TV news" valueField="tvNews" argumentField="year" />
        <LineSeries name="Church" valueField="church" argumentField="year" />
        <LineSeries
          name="Military"
          valueField="military"
          argumentField="year"
        />
        <Title
          text={`Orders line`}
          textComponent={TitleText}
        />
        <Animation />
      </Chart>
    </Paper>
  );
};
