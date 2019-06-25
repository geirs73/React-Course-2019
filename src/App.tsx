import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import {NameBlock} from "./test1"

const App: React.FC = () => {
  return (
      <NameBlock name="Geir" />
  );
}

// class AppComponent extends React.Component<{},{}>{
//   render() {
//     return (
//       <NameBlock name="Geir" />
//   );
//   }
// }

export default App;
