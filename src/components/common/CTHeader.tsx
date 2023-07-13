import React, { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CTIconImageText from './CTIconImageText'
import CTVIcons from './CTVIcons'
import { colors, fonts, images, metrics } from '../../theme'
import {
  CTIconImageTextLabelPlacement,
  CTVIconsType,
} from '../../types/common.type'
import CTImage from './CTImage'

type TProps = {
  primaryText: string
  secondaryText?: string
  labelPlacement?: CTIconImageTextLabelPlacement
  iconType?: CTVIconsType
  iconName?: string
  containerStyle?: object
  rightSource?: JSX.Element
  rightIconType?: CTVIconsType
  rightIconName?: string
  rightIsDisable?: boolean
  rightOnPress?: (data: any) => void
  onPress?: (data: any) => void
}
const CTHeader = ({
  primaryText,
  containerStyle,
  rightSource,
  rightIsDisable,
  rightOnPress,
  onPress,
}: TProps) => {
  const _renderRight = () => {
    if (rightSource) return rightSource
    return (
        <TouchableOpacity
          onPress={rightOnPress}
          activeOpacity={0.5}
          disabled={rightIsDisable}
        >
          <CTVIcons
            iconType={'IonIcons'}
            name={'chatbox'}
            size={metrics.icons.medium}
            color={colors.grey700}
          />
        </TouchableOpacity>
      )
  }
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
       <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.5}
          disabled={rightIsDisable}
        >
          <CTImage
      imageSrc={images.logo}
      imageWidth={12}
      imageHeight={5}
      resizeMode="cover"
      imageStyle={{...metrics.border.bR25}}
      showFullImage={true}
      handlePress={onPress}
    />
        </TouchableOpacity>
        <Text style={styles.primaryTextStyle}>{primaryText}</Text>
      <View style={styles.rightViewStyle}>{_renderRight()}</View>
    </View>
  )
}

export default memo(CTHeader)

const styles = 
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      ...metrics.paddings.pB10,
    },
    primaryTextStyle: {
      ...fonts.fontStyle.p2LRText,
      color:colors.grey700,
    },
    rightViewStyle:{
      flexDirection: 'row',
      alignItems: 'center',
    },
  })
