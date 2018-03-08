import { StyleSheet } from 'react-native'
import { mScale } from './helpers'
import { metrics, size } from './metrics'

const style = {
  topContainer: {
    padding: 0,
    margin: 0,
    flex: 1
  },
  container: {
    padding: metrics.basePadding,
    margin: metrics.baseMargin
  },
  text: {
    fontSize: size.regular
  },
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3
  },
  h4: {
    fontSize: size.h4
  },
  h5: {
    fontSize: size.h5
  },
  h6: {
    fontSize: size.h6
  },
  bold: {
    fontWeight: 'bold'
  },
  light: {
    fontWeight: '100',
    color: 'rgba(0,0,0,0.6)'
  }
}

export default styles = StyleSheet.create({...style})
