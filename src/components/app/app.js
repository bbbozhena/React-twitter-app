import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter"
import PostList from "../post-list";
import PostAddForms from "../post-add-form";

import "./app.css"
import "../app-header/app-header.css"
import "../post-add-form/post-add-form.css"
import "../post-list/post-list.css"
import "../post-list-item/post-list-item.css"
import "../post-status-filter/post-status-filter.css"
import "../search-panel/search-panel.css"


const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter/>
      </div>
      <PostList/>
      <PostAddForms/>
    </div>
  );
};

export default App;
