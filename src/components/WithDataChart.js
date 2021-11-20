import React from "react";

import { VtmnLoader } from "@vtmn/react";

import configData from "../config.json";
import Chart from "./Chart";

class WithDataChart extends React.Component {
  constructor(props) {
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
        const myData = data.trends.map((monthlyTrend) => ({
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
        <div class="vtmn-alert vtmn-alert_variant--warning">
          <div class="vtmn-alert_content">
            <span class="vtmn-alert_content-description">Aucunes données</span>
          </div>
        </div>
      )
    ) : (
      <VtmnLoader />
    );
  }
}

export default WithDataChart;
