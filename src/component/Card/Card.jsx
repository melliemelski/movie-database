import React, { Component } from 'react';
import styles from "./Card.module.scss";


class Card extends Component {
  
  render() { 
    const {
      Title,
      Year,
      Poster,
    } = this.props.movie;
    return ( 
      <>
      <div className={styles.Card}>
        <img src={Poster} alt="Movie Poster"/>
        <section className={styles.text}>
          <h3>{Title}</h3>
          <p>
            {<span>{Year}</span>}
          </p>
        </section>
      </div>
    </>
     );
  }
}
 
export default Card;