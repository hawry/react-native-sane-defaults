import { Dimensions, Platform } from 'react-native'
import { mScale } from './helpers'

const { width, height } = Dimensions.get('window')

const metrics = {
  baseMargin: mScale(10),
  basePadding: mScale(8),
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS==='ios') ? 64 : 54,
}

const size = {
  h1: mScale(32),
  h2: mScale(30),
  h3: mScale(28),
  h4: mScale(26),
  h5: mScale(24),
  h6: mScale(22),
  regular: mScale(15),
  small: mScale(12),
  large: mScale(18)
}

export {
  metrics,
  size
}
