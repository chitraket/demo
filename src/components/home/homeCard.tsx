import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeCardOne from './homeCardOne'
import HomeCardTwo from './homeCardTwo'
import { colors, metrics } from '../../theme'
import HomeThree from './homeThree'

const HomeCard = () => {
  return (
    <View style={styles.homeCard}>
          <HomeCardOne/>
          <HomeCardTwo/>
          <HomeThree/>
    </View>
  )
}

export default HomeCard

const styles = StyleSheet.create({
    homeCard:{
        backgroundColor:colors.white,
        ...metrics.borderWidth.bW1,
        borderColor:colors.primary300,
        ...metrics.border.bR4
    }
})