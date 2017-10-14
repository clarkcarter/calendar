import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '',
    };
  }

  componentDidMount() {
    // firebase things?
  }

  onDayPress = (day) => {
    this.setState({
      /* selected: [...this.state.selected, day.dateString] */
      selected: day.dateString
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.selected}</Text>
        <CalendarList
          onDayPress={this.onDayPress}
          /* markedDates={{[this.state.selected[0]]: {selected: true}}} */
          markedDates={{[this.state.selected]: {selected: true}}}
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
