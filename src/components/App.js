import React, { Component } from 'react';
import CurrentUserAccountBar from '../containers/CurrentUserAccountBar';
import AvailableChannels from '../containers/AvailableChannels';
import FilteredCardList from '../containers/FilteredCardList';
import AddMessage from '../containers/AddMessage';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="leftbar">
          <AvailableChannels />
          <CurrentUserAccountBar />  
        </div>
        <div className="rightbar">
          <FilteredCardList />
          <AddMessage />
        </div>
      </div>
    );
  }
}

export default App;
