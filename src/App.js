import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddMovie />
      </div>
    );
  }
}

export default App;
