import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
// Lib para fazer chamadas REST API
import axios from 'axios';

import Header from '../components/header'
import PeopleList from '../components/peopleList'

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pessoas: []
    };
  }

  // MEDOTO DO REACT - Ele é chamado pelo react quando é completado, portanto, chamado somente depois do render(). A chamada é feito uma vez.
  componentDidMount()  {
    // Chamada GET de uma REST no axios
    axios
      .get('https://randomuser.me/api/?results=10')
      .then( (res) => {
        const results = res.data.results; // const {results} = res.data;
        console.log(results);
        this.setState({
          pessoas: results
        });
      })
  }

  // SOMENTE O RENDER() É RECONHECIDO PELO REACT, PORTANTO, REACT EXECUTA AUTOMATICO SOMENTE O METODO RENDER() 
  render() {
    return (
      <View>
        {/* <Header title="Pessoas"/> */}
        <PeopleList pessoas={this.state.pessoas}/>
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