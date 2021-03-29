import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextPropTypes, View, ActivityIndicator } from 'react-native';
// Lib para fazer chamadas REST API
import axios from 'axios';

import Header from '../components/header'
import PeopleList from '../components/peopleList'

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pessoas: [],
      loading: false
    };
  }

  // MEDOTO DO REACT - Ele é chamado pelo react quando é completado, portanto, chamado somente depois do render(). A chamada é feito uma vez.
  componentDidMount()  {
    // Chamada GET de uma REST no axios
    this.setState({
      loading: true
    })
    axios
      .get('https://randomuser.me/api/?results=100')
      .then( (res) => {
        const results = res.data.results; // const {results} = res.data;
        console.log(results);
        this.setState({
          pessoas: results,
          loading: false
        });
      })
  }

  // SOMENTE O RENDER() É RECONHECIDO PELO REACT, PORTANTO, REACT EXECUTA AUTOMATICO SOMENTE O METODO RENDER() 
  render() {
    return (
      <View style={style.container}>
        {
          this.state.loading ? 
            <ActivityIndicator size="large" color="blue" /> :
            <PeopleList pessoas={this.state.pessoas} navigation={this.props.navigation}/>
        }
      </View>
    );
  }

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

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