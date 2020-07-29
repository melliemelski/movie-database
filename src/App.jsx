import React, { Component } from 'react';
import Main from "../src/container/Main";
import styles from "./App.module.scss";

export default class App extends Component {
  state = {
    movies: [],
    titlesearch: "",
    yearsearch: "",
  };

  handleTitleSearch = (event) => this.setState({titlesearch: event.target.value})
  handleYearSearch = (event) => this.setState({yearsearch: event.target.value})
    
  
  
  fetchMovies = () => {
    fetch(`http://www.omdbapi.com/?s=${this.state.titlesearch}&?y=${this.state.yearsearch}&apikey=b295cb01`)
      .then(response => response.json())
      .then((data) => {
        console.log(data.Search)
        this.setState({
          movies: data.Search
        });
      })
      .catch(error => console.log(error));
    }

  render() {
    console.log(this.state.movies)
    return (
          <>
            <div>
              <div className={styles.search}>
                <p>Title</p>
                <input type="text" onChange={this.handleTitleSearch}/>
                <p>Year</p>
                <input type="text" onChange={this.handleYearSearch}/>
                <button onClick={this.fetchMovies}>Search</button>
              </div>
            <Main movies={this.state.movies}/>
            </div>
          </>
        ) 
    
  }
}