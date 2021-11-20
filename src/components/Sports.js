import React from "react";

import Sport from "./Sport";

class Sports extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <Sport key={item.id} sport={item.attributes.name} />
        ))}
      </ul>
    );
  }
}

export default Sports;
