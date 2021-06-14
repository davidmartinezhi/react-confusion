import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent.js';
import './App.css';

class App extends Component {


  render(){
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

export default App;
