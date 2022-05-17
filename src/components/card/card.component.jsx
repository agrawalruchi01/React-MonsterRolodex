import { Component } from "react";
import "./card.styles.css"

class Card extends Component {
    render() {
        const monster = this.props.monster;
        const index = this.props.index;
       return <div className='card-container' key={index}>
                <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2`}></img>
                <h2>{monster.name}</h2>
                <p>{monster.email}</p></div>
    }
}

export default Card;