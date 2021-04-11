import React, { Component } from 'react';
import ReachDOM from 'react-dom';
import CardList from './CardList.js';
import {robots} from './robots.js';
import SearchBox from './SearchBox.js';
import './index.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField:'',
        }
    }


    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });    
        return(
            <div className='App'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;