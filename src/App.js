import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import CardList  from './components/card-list/card-list.component';
import SearchBox  from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async getData() {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState(() => { return { monsters: data } });
    } catch {

    }
  }

  componentDidMount() {
    this.getData();
  }

  onChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();    
    this.setState (() => {
      return {searchField}
    });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onChangeHandler={this.onChange} className="search-box" placeHolder={'Search Monsters'} />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
