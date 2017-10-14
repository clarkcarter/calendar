import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'

class Date extends React.Component {

  toggleSelected() {
    this.props.doc.ref.delete();
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.toggleSelected()}
      >
          <View>
            <Text>{this.props.date}</Text>
            <Text>{this.props.doc.id}</Text>
          </View>

      </TouchableHighlight>
    )
  }
}

export default Date;
