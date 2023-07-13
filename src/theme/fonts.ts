import colors from './colors'
import { textScale } from '../utils'

const fontSize = {
  h1: textScale(40),
  h2: textScale(29),
  h3: textScale(24),
  h4:textScale(20),
  h5:textScale(18),
  p1:textScale(16),
  p2:textScale(14),
  caption: textScale(12),
}

const lineHeight = {
  lh4: { lineHeight: textScale(4) },
  lh8: { lineHeight: textScale(8) },
  lh12: { lineHeight: textScale(12) },
  lh16: { lineHeight: textScale(16) },
  lh18: { lineHeight: textScale(18) },
  lh20: { lineHeight: textScale(20) },
  lh38: { lineHeight: textScale(38) },
}

const fontFamily = { 
  latoBold: 'Montserrat-Bold', // 700
  latoSemiBold: 'Montserrat-SemiBold', // 600
  latoRegular: 'Montserrat-Medium', // 500
  latoLight: 'Lato-Light',// 400
  latoThin: 'Lato-Thin', // 300
}

const fontStyle = {
  h1LBText: {
    fontSize: fontSize.h1,
    color: colors.black,
    fontFamily:fontFamily.latoBold,
  },
  h2LBText: {
    fontSize: fontSize.h2,
    color: colors.black,
    fontFamily:fontFamily.latoBold,
  },
  H3LLText:{
    fontSize: fontSize.h3,
    color: colors.black,
    fontFamily:fontFamily.latoLight,
  },
  H3LBText:{
    fontSize: fontSize.h3,
    color: colors.black,
    fontFamily:fontFamily.latoBold,
  },
  H4LBText:{
    fontSize: fontSize.h4,
    color: colors.black,
    fontFamily:fontFamily.latoBold,
  },
  H4LLText:{
    fontSize: fontSize.h4,
    color: colors.black,
    fontFamily:fontFamily.latoLight,
  },
  H5LRText:{
    fontSize: fontSize.h5,
    color: colors.black,
    fontFamily:fontFamily.latoRegular,
  },
  H5LLText:{
    fontSize: fontSize.h5,
    color: colors.black,
    fontFamily:fontFamily.latoLight,
  },
  p1LBText:{
    fontSize: fontSize.p1,
    color: colors.black,
    fontFamily:fontFamily.latoBold,
  },
  p1LSBText:{
    fontSize: fontSize.p1,
    color: colors.black,
    fontFamily:fontFamily.latoSemiBold,
  },
  p1LRText:{
    fontSize: fontSize.p1,
    color: colors.black,
    fontFamily:fontFamily.latoRegular,
  },
  p1LLText:{
    fontSize: fontSize.p1,
    color: colors.black,
    fontFamily:fontFamily.latoLight,
  },
  p2LRText:{
    fontSize: fontSize.p2,
    color: colors.black,
    fontFamily:fontFamily.latoRegular,
  },
  p2LSBText:{
    fontSize: fontSize.p2,
    color: colors.black,
    fontFamily:fontFamily.latoSemiBold,
  },
  p2LLText:{
    fontSize: fontSize.p2,
    color: colors.black,
    fontFamily:fontFamily.latoLight,
  },
  captionLLText:{
    fontSize: fontSize.caption,
    color: colors.black,
    fontFamily:fontFamily.latoLight,
  },
  captionLRText:{
    fontSize: fontSize.caption,
    color: colors.black,
    fontFamily:fontFamily.latoRegular,
  },
  captionLBText:{
    fontSize: fontSize.caption,
    color: colors.black,
    fontFamily:fontFamily.latoBold,
  },
  captionLSBText:{
    fontSize: fontSize.caption,
    color: colors.black,
    fontFamily:fontFamily.latoSemiBold,
  }
}

export default {
  fontSize,
  fontStyle,
  fontFamily,
  lineHeight,
}
