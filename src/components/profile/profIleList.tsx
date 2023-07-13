import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, images, metrics } from '../../theme'
import { CTIconImageText } from '../common'
import { wp } from '../../utils'

const ProfileList = () => {
  const renderItem = () => {
    return (
      <CTIconImageText 
      iconTextView={styles.iconTextView} 
      imageSrc={images.profile} 
      labelPlacement='right' 
      primaryText='Born Winner' 
      primaryTextStyle={{...fonts.fontStyle.p2LRText}} 
      secondaryLines={3} 
      secondaryTextStyle={styles.secondaryTextStyle} 
      secondaryText='Top 10% of highest spending players in a month'/>
    )
  }
  return (
    <FlatList
    data={[{},{},{}]}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{...metrics.paddings.pT10}}
    renderItem={renderItem}
    ItemSeparatorComponent={()=> <View style={{...metrics.paddings.pV5}}/>}       
  />
  )
}

export default ProfileList

const styles = StyleSheet.create({
  iconTextView:{
    backgroundColor:colors.white,
    ...metrics.border.bR4,
    borderColor:colors.primary300,
    ...metrics.borderWidth.bW1,
    ...metrics.paddings.p8
  },
  secondaryTextStyle:{
    width:wp(70),
    ...fonts.fontStyle.p2LRText, 
    color:colors.grey700
  }
})