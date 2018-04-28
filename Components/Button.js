import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Text from './Text'
import styles from '../style'

class Button extends Component {
  render () {
    const { onPress, title, success, danger, neutral, rounded, disabled, left, right, buttonStyle, textStyle, ...rest } = this.props
    const btnStyle = [styles.defaultButton, buttonStyle]
    const txtStyle = [styles.defaultButtonText, textStyle]

    if (success) btnStyle.push(styles.successButton) && txtStyle.push(styles.successButtonText)
    if (danger) btnStyle.push(styles.dangerButton) && txtStyle.push(styles.dangerButtonText)
    if (neutral) btnStyle.push(styles.neutralButton) && txtStyle.push(styles.neutralButtonText)
    if (rounded) btnStyle.push(styles.roundedButton)
    if (disabled) btnStyle.push(styles.disabledButton) && txtStyle.push(styles.disabledButtonText)

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={btnStyle} disabled={disabled}>
        <Text style={txtStyle}>
          { left && (
            this.props.left
          )}
        </Text>
        <Text style={txtStyle}>
          {this.props.title}
        </Text>
        <Text style={txtStyle}>
          { right && (
            this.props.right
          )}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Button
