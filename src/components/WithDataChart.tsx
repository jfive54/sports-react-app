import React from "react";

import { VtmnLoader } from "@vtmn/react";

import configData from "../config.json";
import Chart from "./Chart";
import { ChartData } from "./interfaces";

type Props = {
  sport: string;
};

type State = {
  data: ChartData[];
  loaded: boolean;
};

interface MonthlyTrend {
  formattedTime: string;
  value: number;
}

class WithDataChart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { data: [], loaded: false };
  }

  componentDidMount() {
    fetch(`${configData.TREND_API_URL}${this.props.sport}`, {
      credentials: "same-origin",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const myData = data.trends.map((monthlyTrend: MonthlyTrend) => ({
          x: monthlyTrend.formattedTime,
          y: monthlyTrend.value,
        }));
        this.setState({ data: myData, loaded: true });
      })
      .catch(console.log);
  }
  render() {
    return this.state.loaded ? (
      this.state.data.length > 0 ? (
        <Chart data={this.state.data} sport={this.props.sport} />
      ) : (
        <div className="vtmn-alert vtmn-alert_variant--warning">
          <div className="vtmn-alert_content">
            <span className="vtmn-alert_content-description">
              Aucunes données
            </span>
          </div>
        </div>
      )
    ) : (
      <VtmnLoader />
    );
  }
}

export default WithDataChart;
