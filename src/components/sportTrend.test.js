import React from "react";
import renderer from "react-test-renderer";

import SportTrend from "./SportTrend";

describe("Sport trend", () => {
  test("Sport trend test", async () => {
    const component = await renderer.create(<SportTrend />);

    let sportTrend = component.toJSON();
    expect(sportTrend).toMatchSnapshot();
  });
});
