import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, metrics } from '../../theme'
import { CTIconImageText } from '../common'

const ProfileCard = () => {
  return (
    <View style={styles.profileCard}>
            <CTIconImageText 
                labelPlacement='right'
                iconTextView={{justifyContent:'space-between'}}
                mainSource={
                  <CTIconImageText
                    labelPlacement='top'
                    primaryText='Under or Over'
                    primaryTextStyle={styles.profilePrimaryText}
                    mainSource={
                      <CTIconImageText 
                        labelPlacement='right'
                        primaryText='81%'
                        iconType='AntDesign'
                        iconName='arrowup'
                        iconColor={colors.green800}
                        iconBackgroundStyle={{...styles.iconBackgroundStyle,backgroundColor:colors.green400}}
                        primaryTextStyle={{...fonts.fontStyle.H3LBText}}
                      />
                    } 
                  />
                }
                lableSource={
                  <CTIconImageText
                    labelPlacement='top'
                    primaryText='Top 5' 
                    primaryTextStyle={styles.profilePrimaryText}
                    mainSource={
                      <CTIconImageText 
                        labelPlacement='right'
                        primaryText='-51% '
                        iconType='AntDesign'
                        iconName='arrowdown'
                        iconColor={colors.red900}
                        iconBackgroundStyle={{...styles.iconBackgroundStyle,backgroundColor:colors.red800}}
                        primaryTextStyle={{...fonts.fontStyle.H3LBText}}
                      />
                    } 
                  />
                }
            />
        </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    profileCard:{
        ...metrics.border.bR4,
        borderColor:colors.primary300,
        ...metrics.borderWidth.bW1,
        ...metrics.paddings.p10
    },
    profilePrimaryText:{
        ...fonts.fontStyle.p2LSBText,
        color:colors.grey700
    },
    iconBackgroundStyle:{
        ...metrics.paddings.p5
    }
})