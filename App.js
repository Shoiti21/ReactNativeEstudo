import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/header'

export default function App() {
  return (
    <View>
      <Header/>
      <Text>Olá mundo!</Text>
    </View>
  );
}

/*
Os três metodos tem o mesmo retorno

Alternativa 1 - Functionanl
const App = function() {
  return (
    <View>
      <Text>Olá mundo!</Text>
    </View>
  )
}
export default App;


Alternativa 2 - Functional with Array Function 
const App = () => (
  <View>
    <Text>Olá mundo!</Text>
  </View>
);
export default App;
 
Alternativa  3 - Class
class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Olá mundo!</Text>
      </View>
    );
  }
}
export default App;

*/