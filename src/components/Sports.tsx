import React from "react";

import Sport from "./Sport";
import { Item } from "./interfaces";

type Props = {
  items: Item[];
};

class Sports extends React.Component<Props> {
  render() {
    return (
      <ul>
        {this.props.items.map((item: Item) => (
          <Sport key={item.id} sport={item.attributes.name} />
        ))}
      </ul>
    );
  }
}

export default Sports;
