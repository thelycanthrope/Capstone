import React from 'react'
// import Comp1 from './Components/Comp1'
import Appp from './Components/Appp'
import './App.css'
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
  return (
    <div className="App">  

    <Provider store={store}>
    <Appp />
    </Provider>
    </div>
  );
}

export default App;
