import React, { Component } from 'react';
import Card from "../../component/Card";
import styles from "./CardList.module.scss";


class CardList extends Component {

render() {
    const { movies } = this.props;
    console.log(this.props.movies)
    return (
        <section className={styles.cards}>
            {movies.map((movie) => (
            <div className={styles.card}  key={movie.imdbID}>
               <Card movie={movie}/>
            </div>  
            ))}
        </section>
    );
}
}
export default CardList;