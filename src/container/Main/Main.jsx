import React, { Component } from 'react';
import CardList from "../CardList";
import styles from "./Main.module.scss"


class Main extends Component {

  render() { 
    return ( 
    <div className={styles.landing}>
      <CardList movies={this.props.movies}/>
    </div>
    );
  }
}
 
export default Main;