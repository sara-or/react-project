import React, { Component } from 'react';

 import { Provider } from 'react-redux'

import HomePage from './project/homePage';
import './App.css'
import store from './project/redux/store';

class App extends Component {


  render() {
    return (
     <Provider store={store}>
      <div className="App">
       <HomePage></HomePage>  
      </div>
       </Provider> )
  }
}
export default App;
