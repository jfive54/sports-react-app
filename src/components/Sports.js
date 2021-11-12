import React from "react";

class Sports extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.attributes.name}</li>
        ))}
      </ul>
    );
  }
}

export default Sports;