import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipesScreen from './screens/RecipesScreen';
import SavedRecipesScreen from './screens/SavedRecipesScreen';

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const [savedRecipes, SetSavedRecipes] = useState([]);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recipes" component={RecipesScreen}/>
        <Tab.Screen name="Saved" component={SavedRecipesScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

