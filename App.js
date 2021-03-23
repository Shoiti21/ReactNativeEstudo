import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/header'

export default class App extends React.Component {

  //  Metodo criado para carregar e montar a lista
  renderList() {
    const pessoas =  [
      'Leandro',
      'Gustavo',
      'Leonardo',
      'Maria',
      'Naruto'
    ]
  
    const pessoasText = pessoas.map(pessoa => (
      <Text key={pessoa}>{pessoa}</Text>
    ))

    return pessoasText;
  };

  // SOMENTE O RENDER() É RECONHECIDO PELO REACT, PORTANTO, REACT EXECUTA AUTOMATICO SOMENTE O METODO RENDER() 
  render() {
    return (
      <View>
        <Header title="Pessoas"/>
        <Text>Olá mundo!</Text>
        {this.renderList()}
      </View>
    );
  }

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