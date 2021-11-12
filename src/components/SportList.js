import React from "react";

import { VtmnTextInput } from "@vtmn/react";

import Sports from "./Sports";

class SportList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], filterItems: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <div className="vtmn-flex vtmn-bg-brand-digital-light-3 vtmn-rounded-lg vtmn-p-6 vtmn-mb-5">
          <p className="vtmn-text-xl vtmn-text-center vtmn-font-semibold vtmn-text-black">
            Sport
            <span className="vtmn-text-brand-digital vtmn-text-2xl">
              List <span className="vtmx-sun-fill inline-icon"></span>
            </span>
          </p>
        </div>
        <div className="vtmn-flex vtmn-justify-around">
          <div>
          <VtmnTextInput
            labelText="Filtrer"
            onChange={this.handleChange}
            identifier="filter"
            helperText="Filtrer les sports"
          />
          </div>
        </div>
        <div className="vtmn-flex vtmn-justify-around">
          <div className="vtmn-card">
            <div className="vtmn-card_content">
              <Sports items={this.state.filterItems} />*
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://sports.api.decathlon.com/sports")
      .then((res) => {
        return res.json();
      })
      .then(({ data }) => {
        this.setState({ items: data, filterItems: data });
      })
      .catch(console.log);
  }

  handleChange(e) {
    let itemsCopy = [...this.state.items];
    const filterItems = itemsCopy.filter((sport) =>
      sport.attributes?.name?.includes(e.target.value)
    );
    console.log(e.target.value);
    this.setState({ text: e.target.value, filterItems });
  }
}

export default SportList;
