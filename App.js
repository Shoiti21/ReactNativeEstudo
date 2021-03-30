import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import loginPage from './src/pages/loginPage'
import PeoplePage from './src/pages/peoplePage'
import PeopleDetailsPage from './src/pages/peopleDetailsPage'

const StackNavigator = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }
      }>
        <StackNavigator.Screen name="Login" component={loginPage}/>
        <StackNavigator.Screen name="Pessoas" component={PeoplePage}/>
        <StackNavigator.Screen 
          name="Detalhes" 
          component={PeopleDetailsPage}
          options={ ({route}) => {
              const titleNav = route.params.pessoa.name.first;
              return ({
                title: titleNav
              })
            }
          }
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;