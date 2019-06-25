import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import {NameBlock} from "./components/NameBlock"

// const App: React.FC = () => {
//   return (
//       <NameBlock name="Geir" />
//   );
// }

class App extends React.Component<{},{}>{
  render() {
    return (
      <NameBlock name="Geir" lastName="Sørensen" />
  );
  }
}

export default App;
