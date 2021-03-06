import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

import { ChartData } from "./interfaces";

type Props = {
  data: ChartData[];
  sport: string;
};

const Chart = ({ data, sport }: Props) => {
  // get only january labels
  const tickValues = data.filter(({ x }) => x.match(/Jan/g)).map(({ x }) => x);
  return (
    <div id={`panel-${sport}`}>
      <XYPlot width={1000} height={300} xType="ordinal">
        <HorizontalGridLines />
        <LineSeries data={data} />
        <XAxis tickValues={tickValues} />
        <YAxis />
      </XYPlot>
    </div>
  );
};

export default Chart;
