import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

const Chart = ({ data, sport }) => {
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
