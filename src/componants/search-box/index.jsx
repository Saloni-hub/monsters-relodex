import React, { Component } from "react";
import './styles.css';

export default class SearchInput extends Component {
  render() {
    const { onSearchChange,className,placeholder } = this.props;
    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    );
  }
}
