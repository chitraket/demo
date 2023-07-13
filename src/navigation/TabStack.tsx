import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors, fonts } from '../theme'
import { navigationStrings } from '../utils'
import { HomeScreen, ProfileScreem } from '../screen'
import { CTVIcons } from '../components/common'

const TabStack = () => {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.grey400,
      tabBarLabelPosition: 'below-icon',
      tabBarStyle: {
        borderColor: colors.black,
      },
      tabBarLabelStyle: {
        ...fonts.fontStyle.captionLLText,
      },
      tabBarShowLabel: true,
    }}
  >
        <Tab.Screen name={navigationStrings.ProfileScreen} component={ProfileScreem} options={{
          tabBarIcon: ({ size, color }) => (
            <CTVIcons iconType='IonIcons' name="checkmark-done" size={size} color={color} />
          ),
        }} />
  </Tab.Navigator>
  )
}

export default TabStack