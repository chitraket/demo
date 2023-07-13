import { View, Text,  FlatList } from 'react-native'
import React from 'react'
import { CTButton, CTHeader, CTIconImageText, CTWrapperContainer } from '../../components/common'
import { colors, fonts, images, metrics } from '../../theme'
import { ProfileCard, ProfilePicture } from '../../components/profile'
import { wp } from '../../utils'

const ProfileScreem = () => {

  return (
    <CTWrapperContainer viewContainer={{...metrics.paddings.pB0}}>
      <React.Fragment>
        <CTHeader primaryText='Profile'/>
        <ProfilePicture imageUrl={images.profile}/>
        <CTIconImageText
        primaryText='Jina Simons'
        primaryTextStyle={{...fonts.fontStyle.p2LRText}}
        secondaryText='6000 Pts'
        secondaryTextStyle={{...metrics.paddings.pT5,...fonts.fontStyle.p2LRText,color:colors.grey700,textAlign:'center'}}
        labelPlacement='bottom'
        />
        <Text style={{...metrics.paddings.pT5,...metrics.paddings.pB8,...fonts.fontStyle.p2LRText,color:colors.grey700,}}>I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!</Text>
        <CTIconImageText
          primaryText='Logout'
          iconType='AntDesign'
          iconName='logout'
          iconColor={colors.grey700}
          labelPlacement='right'
          iconTextView={{alignSelf:'center',...metrics.paddings.pB10}}
        />
        <ProfileCard/>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', ...metrics.paddings.pT8}}>
          <CTButton btnStyle={{width:wp(45),backgroundColor:'transparent',...metrics.borderWidth.bW0}} textStyle={{color:colors.grey700}} onPress={()=> ""} btnText='Games Played'/>
          <CTButton btnStyle={{width:wp(45),backgroundColor:'transparent',...metrics.border.bR0,...metrics.borderWidth.bWB1,borderColor:colors.primary}}  onPress={()=> ""}  textStyle={{color:colors.primary}} btnText='Badges'/>
        </View>
        <FlatList
          data={[{},{},{}]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{...metrics.paddings.pT10}}
          renderItem={() => <CTIconImageText iconTextView={{backgroundColor:colors.white,...metrics.border.bR4,borderColor:colors.primary300,...metrics.borderWidth.bW1,...metrics.paddings.p8}} imageSrc={images.profile} labelPlacement='right' primaryText='Born Winner' primaryTextStyle={{...fonts.fontStyle.p2LRText}} secondaryLines={3} secondaryTextStyle={{width:wp(70),...fonts.fontStyle.p2LRText, color:colors.grey700}} secondaryText='Top 10% of highest spending players in a month'/>}
          ItemSeparatorComponent={()=> <View style={{...metrics.paddings.pV5}}/>}       
        />
        </React.Fragment>
    </CTWrapperContainer>
  )
}

export default ProfileScreem