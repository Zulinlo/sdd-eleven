import React, { Component } from "react";

import s from "./Root.scss";

import Crafting from "components/Root/Crafting";
import SearchEngine from "components/Root/SearchEngine";

import logo_blocks from "images/logos/logo_blocks.png";
import logo_crafting from "images/logos/logo_crafting.png";
import logo_search from "images/logos/logo_search.png";
import logo_tools from "images/logos/logo_tools.png";
import main_title from "images/main_title.png";

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "home"
    };
  }

  componentDidMount() {
    document.title = "Minecraft Guide";
  }

  changePage(pageDestination) {
    this.setState({
      currentPage: pageDestination
    });
  }

  currentPage() {
    if (this.state.currentPage === "home") {
      return (
        <div className="homePage">
          <img className="header" src={main_title} />
          <img
            className="homeEntrance"
            onClick={() => this.changePage("search")}
            onMouseOver={e =>
              (e.currentTarget.src = require("images/logos/open_book.png"))
            }
            onMouseOut={e =>
              (e.currentTarget.src = require("images/logos/closed_book.png"))
            }
            src={require("images/logos/closed_book.png")}
          />
        </div>
      );
    } else if (this.state.currentPage === "search") {
      return (
        <div className="interface">
          {this.navBar()}
          <div className="content">
            <SearchEngine currentPage="search" />
          </div>
        </div>
      );
    } else if (this.state.currentPage === "blocks") {
      return (
        <div className="interface">
          {this.navBar()}
          <div className="content">
            <SearchEngine currentPage="blocks" />
          </div>
        </div>
      );
    } else if (this.state.currentPage === "tools") {
      return (
        <div className="interface">
          {this.navBar()}
          <div className="content">
            <SearchEngine currentPage="tools" />
          </div>
        </div>
      );
    } else if (this.state.currentPage === "crafting") {
      return (
        <div className="interface">
          {this.navBar()}
          <div className="content">
            <SearchEngine currentPage="crafting" />
          </div>
        </div>
      );
    } else {
      return <h1>404 error</h1>;
    }
  }

  navBar() {
    return (
      <div className="navbar">
        <div className="tab" onClick={() => this.changePage("search")}>
          <img src={logo_search} alt={"Search"} />
        </div>
        <div className="tab" onClick={() => this.changePage("blocks")}>
          <img src={logo_blocks} alt={"Blocks"} />
        </div>
        <div className="tab" onClick={() => this.changePage("tools")}>
          <img src={logo_tools} alt={"Tools"} />
        </div>
        <div className="tab" onClick={() => this.changePage("crafting")}>
          <img src={logo_crafting} alt={"Crafting"} />
        </div>
        <div className="tab" onClick={() => this.changePage("home")}>
          <img
            onMouseOver={e =>
              (e.currentTarget.src = require("images/logos/open_door.png"))
            }
            onMouseOut={e =>
              (e.currentTarget.src = require("images/logos/closed_door.png"))
            }
            src={require("images/logos/closed_door.png")}
            alt={"Home"}
          />
        </div>
      </div>
    );
  }

  render() {
    return <div className="main_container">{this.currentPage()}</div>;
  }
}
