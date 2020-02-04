import React from 'react';
import './App.css';

import {CardList} from './component/CardList/card-list';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
      
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }
render(){
  const {monsters,searchField} = this.state;
    const Filteredmonsters = monsters.filter(mons=> mons.name.toLowerCase().includes(searchField.toLowerCase()));
  return(
          <div className="App">
            <h1>MONSTERS-SEARCHBOX</h1>
        <input type='search' placeholder='search monster' onChange={e=>{this.setState({searchField: e.target.value});}}/>
        <CardList monsters={Filteredmonsters}/>   
      </div>
  );
} 
}
export default App;
