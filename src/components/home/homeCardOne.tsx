import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, metrics } from '../../theme'
import { CTIconImageText } from '../common'

const HomeCardOne = () => {
  return (
    <View style={styles.homeCardOne}>
            <CTIconImageText
            labelPlacement='right'
            iconTextView={styles.iconTextView}
            mainSource={<CTIconImageText 
            labelPlacement='left'
            primaryText='UNDER OR OVER'
            iconType='MaterialCommunityIcons'
            iconName='information-outline'
            iconColor={colors.primary500}
            primaryTextStyle={styles.primaryTextStyle}
            />}
            lableSource={
              <CTIconImageText 
            labelPlacement='left'
            primaryText='Starting in'
            iconType='MaterialCommunityIcons'
            iconName='information-outline'
            iconColor={colors.primary500}
            primaryTextStyle={{...fonts.fontStyle.captionLRText,...styles.primaryTextStyle}}
            />
            }
            />
            <CTIconImageText
            iconTextView={styles.subIconTextView}
              labelPlacement="bottom"
              primaryText='Bitcoin price will be under'
              secondaryText='$24,524 at 7 a ET on 22nd Jan’21'
              primaryTextStyle={styles.subPrimaryText}
              secondaryTextStyle={styles.subSecondaryText}
            />
          </View>
  )
}

export default HomeCardOne

const styles = StyleSheet.create({
    homeCardOne:{
        ...metrics.paddings.p10,
        backgroundColor:colors.primary,
        ...metrics.border.bTSR4,
        ...metrics.border.bTER4
    },
    iconTextView:{
        justifyContent: 'space-between',
        ...metrics.paddings.pB8,
    },
    primaryTextStyle:{
        ...fonts.fontStyle.captionLSBText,
        color:colors.primary500
    },
    subIconTextView:{
        alignItems:'flex-start'
    },
    subPrimaryText:{
        ...fonts.fontStyle.p1LSBText,
        color:colors.primary500
    },
    subSecondaryText:{
        ...fonts.fontStyle.p1LRText,
        ...metrics.paddings.pT4,
        color:colors.white
    }
})