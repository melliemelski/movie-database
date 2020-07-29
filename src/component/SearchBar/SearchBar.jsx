import React, { Component } from 'react';
import styles from "./SearchBar.module.scss";



class SearchBar extends Component {

  render() { 
    return (
      <>
      <div className={styles.search}>
        <input type="text" onChange={this.props.handleTitleSearch} placeholder={"Title"}/>
        <input type="text" onChange={this.props.handleYearSearch} placeholder={"Year"}/>
        <button onClick={this.props.fetchMovies}>Search</button>
      </div>
      </>
     );
  }
}
 
export default SearchBar;