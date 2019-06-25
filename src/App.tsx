import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import {NameBlock} from "./test1"

const App: React.FC = () => {
  return (
    <div className="App">
      <NameBlock name="Geir" />
    </div>
  );
}

export default App;
