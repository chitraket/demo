import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { colors, metrics } from '../../theme'
import { CTVIconsProps } from '../../types/common.type'

const CTVIcons = ({ iconType, name, size, color }: CTVIconsProps) => {
  const getIcons = (
    iconType: string,
    name: string,
    size?: number,
    color?: string,
  ) => {
    switch (iconType) {
      case 'AntDesign':
        return (
          <AntDesign
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
          />
        )
      case 'Entypo':
        return (
          <Entypo
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
          />
        )
      case 'EvilIcons':
        return (
          <EvilIcons
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
          />
        )
      case 'Feather':
        return (
          <Feather
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
          />
        )

      case 'FontAwesome':
        return (
          <FontAwesome
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
          />
        )

      case 'Fontisto':
        return (
          <Fontisto
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
          />
        )
      case 'MaterialIcons':
        return (
          <MaterialIcons
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
          />
        )
      case 'MaterialCommunityIcons':
        return (
          <MaterialCommunityIcons
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
          />
        )
      case 'IonIcons':
        return (
          <IonIcons
            name={name}
            color={color ? color : colors.black}
            size={size ? size : metrics.icons.small}
          />
        )
      default:
        break
    }
  }
  return (
    <React.Fragment>{getIcons(iconType, name, size, color)}</React.Fragment>
  )
}

export default CTVIcons
