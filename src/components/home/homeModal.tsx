import { StyleSheet } from 'react-native'
import React from 'react'
import CTBottomModal from '../common/CTBottomSheet'
import { CTButton, CTIconImageText, CTWheelPicker } from '../common'
import { colors, fonts, metrics } from '../../theme'
type TProps = {
    isVisible:boolean
}
const HomeModal = ({isVisible}:TProps) => {
  return (
    <CTBottomModal title="Your Prediction is Under" isVisible={isVisible}>
    <React.Fragment>
      <CTWheelPicker/>
      <CTIconImageText
        labelPlacement='right'
        iconTextView={{flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',...metrics.margins.mB15}}
        mainSource={<CTIconImageText
          labelPlacement='bottom'
          primaryTextStyle={{...fonts.fontStyle.captionLRText,color:colors.grey800}}
          primaryText='You can win '
          secondaryTextStyle={{...fonts.fontStyle.captionLSBText,color:colors.green800,...metrics.paddings.pT4}}
          secondaryText='$2000'
        />}
        lableSource={<CTIconImageText
          lableViewStyle={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
          labelPlacement='left'
          primaryText='Total'
          primaryTextStyle={{...fonts.fontStyle.captionLRText,color:colors.grey700,...metrics.paddings.pR5}}
          secondaryText='5'
          secondaryTextStyle={{...fonts.fontStyle.captionLBText,color:colors.black}}
        />}
      />
      <CTButton btnText='Submit my prediction' onPress={()=> ""}/>
    </React.Fragment>
  </CTBottomModal>
  )
}

export default HomeModal

const styles = StyleSheet.create({
    
})