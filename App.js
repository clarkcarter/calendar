import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: [],
    };
  }

  componentDidMount() {
    // firebase things?
  }

  onDayPress = (day) => {
    this.setState({
      selected: [...this.state.selected, day.dateString]
    });
  }

  markedDates() {
    return this.state.selected.map((date) =>
       <Text>'{date}': {'{selected: true}, '}</Text>
    )
  }
  render() {
    const markedDates = this.markedDates();
    return (
      <View style={styles.container}>
        <Text>{this.state.selected}</Text>
        <View>
          <Text>
            {this.markedDates()}
          </Text>
        </View>
        <CalendarList
          onDayPress={this.onDayPress}
          /* markedDates={{[this.state.selected[0]]: {selected: true}}} */
          markedDates={{markedDates}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
});
