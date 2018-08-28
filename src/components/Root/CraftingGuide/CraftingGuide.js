import React, { Component } from "react";

import Information from "./Information";
import Recipes from "./Recipes";

import s from "./CraftingGuide.scss";

export default class CraftingGuide extends Component {
  render() {
    return (
      <div>
        <h1>CraftingGuide</h1>
        <Information />
        <Recipes />
      </div>
    );
  }
}
