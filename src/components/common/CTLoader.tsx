import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import { colors, metrics } from '../../theme'
type TProps = {
  visible: boolean
}
const CTLoader = ({ visible }: TProps) => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator
        animating={visible}
        color={colors.primary}
        size={metrics.icons.medium}
      />
    </View>
  )
}

export default CTLoader
const styles = StyleSheet.create({
  loaderView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...metrics.paddings.pL8,
  },
})
