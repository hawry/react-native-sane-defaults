import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Text from './Text'
import styles from '../style'

class Button extends Component {
  render () {
    const { onPress, title, success, danger, neutral, rounded, ...rest } = this.props
    const buttonStyle = [styles.defaultButton]
    const textStyle = [styles.defaultButtonText]

    if (success) buttonStyle.push(styles.successButton) && textStyle.push(styles.successButtonText)
    if (danger) buttonStyle.push(styles.dangerButton) && textStyle.push(styles.dangerButtonText)
    if (neutral) buttonStyle.push(styles.neutralButton) && textStyle.push(styles.neutralButtonText)
    if (rounded) buttonStyle.push(styles.roundedButton)

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

export default Button
