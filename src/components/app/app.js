import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForms from "../post-add-form";

import "./app.css";
import "../app-header/app-header.css";
import "../post-add-form/post-add-form.css";
import "../post-list/post-list.css";
import "../post-list-item/post-list-item.css";
import "../post-status-filter/post-status-filter.css";
import "../search-panel/search-panel.css";

import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to learn React", important: true, id: "hdl" },
        { label: "That is so cool", important: false, id: "kdkd" },
        { label: "I need a break..", important: false, id: "dnl" },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem (id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice (index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr
      }
    });
  }

  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList 
        posts={this.state.data} 
        onDelete={this.deleteItem} />
        <PostAddForms />
      </AppBlock>
    );
  }
}
