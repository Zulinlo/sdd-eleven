import React, { Component } from "react";

import s from "./Root.scss";

import CraftingGuide from "./CraftingGuide";

export default class Root extends Component {
  render() {
    return (
      <div>
        <h1>
          Root is for background as well as the main interface (the gray
          inventory div)
        </h1>
        <CraftingGuide />
      </div>
    );
  }
}
