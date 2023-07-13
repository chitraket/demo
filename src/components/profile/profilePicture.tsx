import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CTIconImageText, CTImage, CTVIcons } from '../common'
import { colors, metrics } from '../../theme'

const ProfilePicture = ({
    imageUrl,
    onPress,
}:any) => {
  return (
    <View style={styles.profileImageView}>
 <CTImage
      imageSrc={imageUrl}
      imageWidth={25}
      imageHeight={12}
      resizeMode="cover"
      imageStyle={styles.imageStyle}
      showFullImage={true}
      handlePress={onPress}
    />
    <TouchableOpacity
                  onPress={() => ""}
                  style={styles.editIconView}
                >
                  <CTVIcons
                    iconType="MaterialIcons"
                    name={'edit'}
                    color={colors.white}
                  />
    </TouchableOpacity>
    </View>
  )
}

export default ProfilePicture

const styles = StyleSheet.create({
    profileImageView: {
        alignSelf: 'center',
      },
      imageStyle: {
        ...metrics.border.bR100,
      },
      editIconView: {
        backgroundColor: colors.primary,
        ...metrics.paddings.p4,
        ...metrics.border.bR20,
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
        ...metrics.borderWidth.bW2,
        borderColor: colors.white,
      },
})