import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import { navigationRef, navigationStrings } from '../utils';
import TabStack from './TabStack';
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screen";

const RootNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={navigationStrings.HomeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        name={navigationStrings.ProfileScreen}
        component={TabStack}
      />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation