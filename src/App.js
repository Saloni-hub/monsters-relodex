import "./App.css";
import { Component } from "react";
import CardList from "./componants/card-list/card-list.componant";
import SearchInput from "./componants/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Relodex</h1>
        <SearchInput onSearchChange={onSearchChange} className='monsters-search-box' placeholder='Search monsters'/>
        <CardList monsters={filterMonster}/>
      </div>
    );
  }
}

export default App;
