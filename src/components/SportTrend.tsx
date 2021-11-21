import React from "react";

import { VtmnTextInput } from "@vtmn/react";

import { getSports } from "../services/sports-service";

import Sports from "./Sports";
import { Item } from "./interfaces";

interface Props {}
interface State {
  items: Item[];
  filterItems: Item[];
  text: string;
}

class SportList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { items: [], filterItems: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { data } = await getSports();
    this.setState({ items: data, filterItems: this.sortData(data) });
  }

  sortData(data: Item[]) {
    return data.sort((a: Item, b: Item) =>
      a.attributes?.name > b.attributes?.name
        ? 1
        : b.attributes?.name > a.attributes?.name
        ? -1
        : 0
    );
  }

  cleanSearch(search: string) {
    return search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();
  }

  handleChange(e: any) {
    let itemsCopy = [...this.state.items];
    const filterItems = itemsCopy.filter((sport) =>
      this.cleanSearch(sport.attributes?.name ?? "").includes(
        this.cleanSearch(e.target.value)
      )
    );

    this.setState({
      text: e.target.value,
      filterItems: this.sortData(filterItems),
    });
  }

  render() {
    return (
      <div>
        <div className="vtmn-flex vtmn-bg-brand-digital-light-3 vtmn-rounded-lg vtmn-p-6 vtmn-mb-5">
          <p className="vtmn-text-xl vtmn-text-center vtmn-font-semibold vtmn-text-black">
            Sport
            <span className="vtmn-text-brand-digital vtmn-text-2xl">
              Trend <span className="vtmx-temp-hot-line inline-icon"></span>
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
          <Sports items={this.state.filterItems} />
        </div>
      </div>
    );
  }
}

export default SportList;
