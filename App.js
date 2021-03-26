import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PeoplePage from './src/pages/peoplePage'

const StackNavigator = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }
      }>
        <StackNavigator.Screen name="Pessoas" component={PeoplePage}/>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;