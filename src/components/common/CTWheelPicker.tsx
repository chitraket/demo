import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import WheelPicker from 'react-native-wheely'
import { colors, fonts } from '../../theme';

const CTWheelPicker = () => {
    const [selectedIndex, setSelectedIndex] = useState(2);
    const data:any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <React.Fragment>
        <Text style={{...fonts.fontStyle.captionLSBText,color:colors.grey700}}>Entry tickets</Text>
      <WheelPicker
            selectedIndex={selectedIndex}
            options={data}
            onChange={(index) => setSelectedIndex(index)}
            itemTextStyle={{...fonts.fontStyle.p1LBText}}
            selectedIndicatorStyle={{backgroundColor:colors.primary500}}
          />
    </React.Fragment>
  )
}

export default CTWheelPicker

const styles = StyleSheet.create({})