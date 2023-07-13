import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, metrics } from '../../theme'
import { CTIconImageText, CTProgressBar } from '../common'

const HomeThree = () => {
  return (
    <View style={styles.homeThree}>
    <CTIconImageText
      labelPlacement='right'
      iconTextView={styles.iconTextView}
      mainSource={<CTIconImageText 
      labelPlacement='right'
      primaryText='355 Players'
      iconType='MaterialCommunityIcons'
      iconName='information-outline'
      iconColor={colors.grey700}
      primaryTextStyle={styles.primaryTextStyle}
      />}
      lableSource={
        <CTIconImageText 
      labelPlacement='right'
      primaryText='View Chat'
      iconType='MaterialCommunityIcons'
      iconName='information-outline'
      iconColor={colors.grey700}
      primaryTextStyle={styles.primaryTextStyle}
      />
      }
      />
      <CTProgressBar progress={60} height={6} backgroundColor={'#FE4190'} trackColor="#2DABAD"/>

      <CTIconImageText
      labelPlacement='right'
      iconTextView={styles.bottomIconTextView}
      mainSource={<CTIconImageText 
      labelPlacement='left'
      primaryText='232 predicted under'
      primaryTextStyle={styles.bottomPrimaryTextStyle}
      />}
      lableSource={
        <CTIconImageText 
      labelPlacement='right'
      primaryText='123 predicted over'
      primaryTextStyle={styles.bottomPrimaryTextStyle}
      />
      }
      />
    </View>
  )
}

export default HomeThree

const styles = StyleSheet.create({
  homeThree:{
    ...metrics.paddings.p10,
    backgroundColor:colors.primary600,
    ...metrics.border.bBSR4,
    ...metrics.border.bBER4
  },
  iconTextView:{
    justifyContent: 'space-between',
    ...metrics.paddings.pV8
  },
  primaryTextStyle:{
    ...fonts.fontStyle.captionLSBText,
    color:colors.grey700
  },
  bottomPrimaryTextStyle:{
    ...fonts.fontStyle.captionLRText,
    color:colors.grey800
  },
  bottomIconTextView:{
    justifyContent: 'space-between',
    ...metrics.paddings.pV8
  }
})