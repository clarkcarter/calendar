import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'

class Date extends React.Component {
  deleteSelected(item) {
    this.props.ref.item.doc.id.delete();
  }
  render() {
    return (
      <View>
        {this.props.dates.map((date) =>
          <TouchableHighlight
            onPress={this.deleteSelected(date)}
          >
            <Text>{date.date} - {date.selected}</Text>
          </TouchableHighlight>
        )}
      </View>
    )
  }
}

export default Date;
