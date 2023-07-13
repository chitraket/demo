import React, { memo } from 'react'
import {
  ActivityIndicator,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  View,
} from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

// import useNetInfo from '../../hook/useNetInfo'
import { colors } from '../../theme'
import { CTSafeAreaInsets } from '../../types/common.type'
import { moderateScale, verticalScale } from '../../utils'
type TStyleProps = {
  insets?: CTSafeAreaInsets
}
type TProps = {
  viewContainer?: object
  isNetwork?: boolean
  children: JSX.Element
  translucent?: any
  statusBarColor?: string
  barStyle?: StatusBarStyle
  statusBarHidden?: boolean
  isLoading?: boolean
  isLinearGradient?: boolean
}
const CTWrapperContainer = ({
  viewContainer,
  children,
  isNetwork = true,
  translucent = false,
  statusBarColor = colors.primary,
  barStyle,
  statusBarHidden = false,
  isLoading = false,
  isLinearGradient = false,
}: TProps) => {
  const insets = useSafeAreaInsets()
 // const isOffline = isNetwork ? useNetInfo() : null
  return (
    <React.Fragment>
      <StatusBar
        translucent={translucent}
        backgroundColor={statusBarColor}
        barStyle={barStyle || 'dark-content'}
        hidden={statusBarHidden}
      />
        <View style={{ ...styles({ insets }).paddingStyle, ...viewContainer }}>
          {children}
        </View>
      {isLoading ? <ActivityIndicator color={colors.primary} /> : null}
      {/* {isOffline ? <NetworkModal isVisible={!isOffline} /> : null} */}
    </React.Fragment>
  )
}

export default memo(CTWrapperContainer)

const styles = (props: TStyleProps) =>
  StyleSheet.create({
    paddingStyle: {
      paddingLeft: moderateScale(
        Math.max(Number(props && props?.insets?.left), 15),
      ),
      paddingRight: moderateScale(
        Math.max(Number(props && props?.insets?.right), 15),
      ),
      paddingTop: verticalScale(
        Math.max(Number(props && props?.insets?.top), 15),
      ),
      paddingBottom: verticalScale(
        Math.max(Number(props && props?.insets?.bottom), 15),
      ),
      backgroundColor: '#F8F8F8',
      flex: 1,
    },
  })
