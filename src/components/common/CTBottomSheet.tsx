import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Modal from 'react-native-modal'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import CTVIcons from './CTVIcons'
import { colors, fonts, metrics } from '../../theme'
import { CTSafeAreaInsets, CTVIconsType } from '../../types/common.type'
import { hp, moderateScale, verticalScale } from '../../utils'
type TProps = {
  onBackdropPress?: () => void
  isVisible: boolean
  containerStyle?: object
  onCancelPress?: () => void
  cancelStyle?: object
  itemContainerStyle?: object
  title?: string
  titleStyle?: object
  children: JSX.Element
  iconType?: CTVIconsType
  iconColor?: string
  iconSize?: number
  iconName?: string
  coverScreen?: boolean
}
const CTBottomModal = ({
  onBackdropPress,
  isVisible,
  containerStyle,
  onCancelPress,
  cancelStyle,
  itemContainerStyle,
  title,
  titleStyle,
  children,
  iconType,
  iconColor,
  iconSize,
  iconName,
  ...other
}: TProps) => {
  const insets = useSafeAreaInsets()
  return (
    <Modal
      isVisible={isVisible}
      style={styles().modalStyle}
      useNativeDriver
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackdropPress}
      {...other}
    >
      <KeyboardAvoidingView
        style={styles().keyboardAvoidingViewStyle}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View style={[styles().container, containerStyle]}>
          {onCancelPress && (
            <TouchableOpacity
              onPress={onCancelPress}
              style={[styles().cancelContainer, cancelStyle]}
            >
              <CTVIcons
                iconType={iconType || 'AntDesign'}
                name={iconName || 'close'}
                size={iconSize || metrics.icons.small}
                color={iconColor}
              />
            </TouchableOpacity>
          )}
          <View style={[styles(insets).itemContainer, itemContainerStyle]}>
            {title && (
              <Text style={{ ...styles().titleStyle, ...titleStyle }}>
                {title}
              </Text>
            )}
            {children}
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default CTBottomModal

const styles = (insets?: CTSafeAreaInsets) =>
  StyleSheet.create({
    itemContainer: {
      ...metrics.border.bR12,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      paddingBottom: verticalScale(Math.max(Number(insets?.bottom), 15)),
      paddingRight: moderateScale(Math.max(Number(insets?.right), 15)),
      paddingLeft:moderateScale(Math.max(Number(insets?.left), 15)),
      ...metrics.paddings.pT15,
      backgroundColor: colors.white,
      maxHeight: hp(85),
    },
    titleStyle: {
      ...fonts.fontStyle.p1LSBText,
      color:colors.black,
      ...metrics.margins.mB15,
    },
    keyboardAvoidingViewStyle: {
      flex: 1,
    },
    modalStyle: {
      ...metrics.margins.m0,
    },
    modalView: {},
    cancelContainer: {
      ...metrics.paddings.p10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      alignSelf: 'center',
      ...metrics.border.bR50,
      ...metrics.margins.mB15,
    },
    container: {
      flex: 1,
      ...metrics.margins.m0,
      justifyContent: 'flex-end',
    },
    title: {
      ...metrics.paddings.pV10
    },
  })
