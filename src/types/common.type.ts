type CTIconImageTextLabelPlacement = 'left' | 'top' | 'right' | 'bottom'

type CTVIconsType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'Fontisto'
  | 'MaterialIcons'
  | 'IonIcons'
  | 'MaterialCommunityIcons'

type CTSafeAreaInsets = {
  top: number
  right: number
  bottom: number
  left: number
}


type CTVIconsProps = {
  name: string
  color?: string
  size?: number
  iconType: CTVIconsType
}


type TImages = [{ url: string }]

export type {
  CTVIconsType,
  CTIconImageTextLabelPlacement,
  CTSafeAreaInsets,
  CTVIconsProps,
  TImages,
}
