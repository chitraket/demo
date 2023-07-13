import React, { memo, useState } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

import FastImage, { ResizeMode, Source } from 'react-native-fast-image'

import CTModal from './CTModal'
import CTVIcons from './CTVIcons'
import { colors, images, metrics } from '../../theme'
import { CTVIconsType } from '../../types/common.type'
import { hp, wp } from '../../utils'
type TProps = {
  imageWidth?: number | string
  imageHeight?: number | string
  imageStyle?: object
  imageSrc: string | number | null | undefined
  resizeMode?: ResizeMode
  placeholderResizeMode?: ResizeMode
  showFullImage?: boolean
  handlePress?: (data: any) => void
  onBackdropPress?: () => void
  modalContainerStyle?: object
  modalImageStyle?: object
  placeholderImage?: Source
  loadingSource?: JSX.Element
  loadingSize?: 'small' | 'large'
  loadingColor?: string
  imageViewStyle?: object
  loadingViewStyle?: object
  placeholderIconType?: CTVIconsType
  placeholderIconName?: string
  placeholderIconSize?: number
  placeholderIconColor?: string
  placeholderIconStyle?: object
}
const CTImage = ({
  imageWidth,
  imageHeight,
  imageStyle,
  imageSrc,
  resizeMode,
  placeholderResizeMode = 'contain',
  showFullImage,
  handlePress,
  onBackdropPress,
  modalImageStyle,
  placeholderImage,
  loadingSource,
  loadingSize,
  loadingColor,
  imageViewStyle,
  loadingViewStyle,
  placeholderIconType,
  placeholderIconName,
  placeholderIconSize,
  placeholderIconColor,
  placeholderIconStyle,
}: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isFullImage, setFullImage] = useState(showFullImage)
  let uri = imageSrc

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  const onImageInvalid = () => {
    uri = null
    setIsLoading(false)
    setFullImage(false)
  }
  const _renderPlaceholder = () => {
    if (placeholderIconType && placeholderIconName)
      return (
        <View
          style={{
            ...styles(imageWidth, imageHeight).image,
            ...styles().placeholderIconStyle,
            ...placeholderIconStyle,
          }}
        >
          <CTVIcons
            iconType={placeholderIconType}
            name={placeholderIconName}
            size={placeholderIconSize}
            color={placeholderIconColor}
          />
        </View>
      )
    return (
      <FastImage
        source={placeholderImage || images.profile}
        resizeMode={placeholderResizeMode || 'contain'}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={onImageInvalid}
        style={{
          ...styles(imageWidth, imageHeight).image,
          ...placeholderIconStyle,
        }}
      />
    )
  }
  const _renderImage = (style: object) => {
    if (uri && typeof uri === 'number') {
      //Static image
      return (
        <FastImage
          source={uri}
          resizeMode={resizeMode || 'contain'}
          style={style}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={onImageInvalid}
        />
      )
    } else if (uri && typeof uri === 'string') {
      //Network image
      return uri.includes('https') ? (
        <FastImage
          source={{
            uri: uri,
            priority: FastImage.priority.high,
          }}
          resizeMode={resizeMode || 'contain'}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={onImageInvalid}
          style={style}
        />
      ) : (
        <FastImage
          source={{
            uri: uri,
            priority: FastImage.priority.high,
          }}
          resizeMode={resizeMode || 'contain'}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={onImageInvalid}
          style={style}
        />
      )
    } else {
      return _renderPlaceholder()
    }
  }
  const _renderLoading = () => {
    if (loadingSource) return loadingSource
    return (
      <View
        style={{
          ...styles().loadingView,
          ...styles(imageWidth, imageHeight).image,
          ...loadingViewStyle,
        }}
      >
        <ActivityIndicator
          size={loadingSize || 'small'}
          color={loadingColor || colors.primary}
        />
      </View>
    )
  }
  return (
    <>
      <TouchableOpacity
        style={{ ...styles(imageWidth, imageHeight).image, ...imageViewStyle }}
        onPress={isFullImage ? handleModal : handlePress}
        disabled={!(isFullImage || handlePress)}
        activeOpacity={0.5}
      >
        <React.Fragment>
          {isLoading ? _renderLoading() : null}
          {_renderImage({
            ...styles(imageWidth, imageHeight).image,
            ...imageStyle,
          })}
        </React.Fragment>
      </TouchableOpacity>

      {isFullImage ? (
        <CTModal
          isVisible={isModalOpen}
          onCancelPress={handleModal}
          onBackdropPress={onBackdropPress}
          modalCloseIconStyle={styles().modalCloseIcon}
          modalViewStyle={styles().modalView}
          iconSize={metrics.icons.small}
          iconColor={colors.black}
          iconName="close"
        >
          {_renderImage({ ...styles().modalImage, ...modalImageStyle })}
        </CTModal>
      ) : null}
    </>
  )
}
export default memo(CTImage)

const styles = (imageWidth?: number | string, imageHeight?: number | string) =>
  StyleSheet.create({
    image: {
      width: imageWidth ? wp(imageWidth) : wp(15),
      height: imageHeight ? hp(imageHeight) : hp(7.5),
    },
    modalContainer: {
      flex: 1,
      alignItems: 'center',
    },
    modalImage: {
      width: wp(90),
      height: hp(41.5),
      resizeMode: 'contain',
    },
    loadingView: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalCloseIcon: {
      alignSelf: 'center',
      ...metrics.margins.mB30,
      ...metrics.border.bR50,
      backgroundColor: colors.white,
      ...metrics.paddings.p8,
    },
    modalView: {
      backgroundColor: 'transparent',
      ...metrics.paddings.p0,
      height: hp(45),
    },
    placeholderIconStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
