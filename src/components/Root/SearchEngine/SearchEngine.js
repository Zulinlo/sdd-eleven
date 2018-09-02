import React, { Component } from "react";

import s from "./SearchEngine.scss";

import Crafting from "../Crafting";

export default class SearchEngine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listBlocks: [
        {
          id: 0,
          name: "Block of Coal",
          recipe: [
            "coal",
            "coal",
            "coal",
            "coal",
            "coal",
            "coal",
            "coal",
            "coal",
            "coal"
          ]
        },
        {
          id: 1,
          name: "Block of Diamond",
          recipe: [
            "diamond",
            "diamond",
            "diamond",
            "diamond",
            "diamond",
            "diamond",
            "diamond",
            "diamond",
            "diamond"
          ]
        },
        {
          id: 2,
          name: "Ladder",
          recipe: [
            "stick",
            null,
            "stick",
            "stick",
            "stick",
            "stick",
            "stick",
            null,
            "stick"
          ]
        }
      ],

      listTools: [
        {
          id: 3,
          name: "Diamond Sword",
          recipe: [null, "diamond", null, null, "diamond", null, null, "stick"]
        },
        {
          id: 4,
          name: "Diamond Pickaxe",
          recipe: [
            "diamond",
            "diamond",
            "diamond",
            null,
            "stick",
            null,
            null,
            "stick",
            null
          ]
        },
        {
          id: 5,
          name: "Diamond Axe",
          recipe: [
            null,
            "diamond",
            "diamond",
            null,
            "stick",
            null,
            null,
            "stick",
            null
          ]
        }
      ],
      relevantResults: []
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    if (this.state.relevantResults.length === 0) {
      const results = this.state.relevantResults.slice();
      const loopCountBlocks = this.state.listBlocks.length;
      const loopCountTools = this.state.listTools.length;
      if (this.props.currentPage === "search") {
        for (let i = 0; i < loopCountBlocks; i++) {
          var checkResult = {
            name: this.state.listBlocks[i].name,
            id: this.state.listBlocks[i].id
          };
          results.push(checkResult);
        }
        for (let i = 0; i < loopCountTools; i++) {
          var checkResult = {
            name: this.state.listTools[i].name,
            id: this.state.listTools[i].id
          };
          results.push(checkResult);
        }
      } else if (this.props.currentPage === "blocks") {
        for (let i = 0; i < loopCountBlocks; i++) {
          var checkResult = {
            name: this.state.listBlocks[i].name,
            id: this.state.listBlocks[i].id
          };
          results.push(checkResult);
        }
      } else if (this.props.currentPage === "tools") {
        for (let i = 0; i < loopCountTools; i++) {
          var checkResult = {
            name: this.state.listTools[i].name,
            id: this.state.listTools[i].id
          };
          results.push(checkResult);
        }
      }
      this.setState({
        relevantResults: results
      });
    } else {
      return;
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentPage !== this.props.currentPage) {
      this.setState({
        relevantResults: []
      });
    } /* do stuff */
  }

  componentDidUpdate() {
    if (this.state.relevantResults.length === 0) {
      const results = this.state.relevantResults.slice();
      const loopCountBlocks = this.state.listBlocks.length;
      const loopCountTools = this.state.listTools.length;
      if (this.props.currentPage === "search") {
        for (let i = 0; i < loopCountBlocks; i++) {
          var checkResult = {
            name: this.state.listBlocks[i].name,
            id: this.state.listBlocks[i].id
          };
          results.push(checkResult);
        }
        for (let i = 0; i < loopCountTools; i++) {
          var checkResult = {
            name: this.state.listTools[i].name,
            id: this.state.listTools[i].id
          };
          results.push(checkResult);
        }
        this.setState({
          relevantResults: results
        });
      } else if (this.props.currentPage === "blocks") {
        for (let i = 0; i < loopCountBlocks; i++) {
          var checkResult = {
            name: this.state.listBlocks[i].name,
            id: this.state.listBlocks[i].id
          };
          results.push(checkResult);
        }
        this.setState({
          relevantResults: results
        });
      } else if (this.props.currentPage === "tools") {
        for (let i = 0; i < loopCountTools; i++) {
          var checkResult = {
            name: this.state.listTools[i].name,
            id: this.state.listTools[i].id
          };
          results.push(checkResult);
        }
        this.setState({
          relevantResults: results
        });
      }
    } else {
      return;
    }
  }

  Capitalize(str) {
    if (str === "search") {
      str = "search All";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  handleKeyDown(event) {
    var search_input = event.target.value.toLowerCase();

    const results = [];
    const loopCountBlocks = this.state.listBlocks.length;
    const loopCountTools = this.state.listTools.length;

    if (this.props.currentPage === "search") {
      for (let i = 0; i < loopCountBlocks; i++) {
        var checkResult = {
          name: this.state.listBlocks[i].name,
          id: this.state.listBlocks[i].id
        };
        if (checkResult.name.toLowerCase().includes(search_input)) {
          results.push(checkResult);
        }
      }
      for (let i = 0; i < loopCountTools; i++) {
        var checkResult = {
          name: this.state.listTools[i].name,
          id: this.state.listTools[i].id
        };
        if (checkResult.name.toLowerCase().includes(search_input)) {
          results.push(checkResult);
        }
      }
      this.setState({
        relevantResults: results
      });
    } else if (this.props.currentPage === "blocks") {
      for (let i = 0; i < loopCountBlocks; i++) {
        var checkResult = {
          name: this.state.listBlocks[i].name,
          id: this.state.listBlocks[i].id
        };
        if (checkResult.name.toLowerCase().includes(search_input)) {
          results.push(checkResult);
        }
      }
      this.setState({
        relevantResults: results
      });
    } else if (this.props.currentPage === "tools") {
      for (let i = 0; i < loopCountTools; i++) {
        var checkResult = {
          name: this.state.listTools[i].name,
          id: this.state.listTools[i].id
        };
        if (checkResult.name.toLowerCase().includes(search_input)) {
          results.push(checkResult);
        }
      }
      this.setState({
        relevantResults: results
      });
    } else {
      return;
    }
  }

  Results() {
    var content = [];
    for (var i = 0; i < this.state.relevantResults.length; i++) {
      content.push(
        <div key={i} className="child">
          <strong>{this.state.relevantResults[i].name}</strong>
          <img
            src={require("../../../images/items/products/" +
              this.state.relevantResults[i].id +
              ".png")}
          />
        </div>
      );
    }
    console.log(content);
    return content;
  }

  render() {
    return (
      <div className="container">
        {this.props.currentPage === "crafting" ? (
          <div>
            <h1>{this.Capitalize(this.props.currentPage)}</h1>
            <Crafting />
          </div>
        ) : (
          <div>
            <h1>{this.Capitalize(this.props.currentPage)}</h1>
            <input
              className="searchBar"
              onChange={this.handleKeyDown}
              placeholder="Search"
              type="text"
            />
            <div className="results">{this.Results()}</div>
          </div>
        )}
      </div>
    );
  }
}
