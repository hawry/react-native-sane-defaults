import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class HR extends Component {
  render () {
    return (
      <View style={{
        borderBottomColor: this.props.color ? this.props.color : 'rgba(0,0,0,0.8)',
        borderBottomWidth: StyleSheet.hairlineWidth
      }}/>
    )
  }
}

export default HR
