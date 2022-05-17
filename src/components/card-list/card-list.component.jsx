import {Component} from 'react';
import Card from '../card/card.component'
import "./card-list.styles.css";


class CardList extends Component {
    render() {
        return (<div className='card-list'>{this.props.monsters.map((monster, index) => {
            return <Card monster={monster} index={index}></Card> 
          })}</div>);
    }
}

export default CardList