import React from 'react'
import { FlatList, StyleSheet, Platform, Image, Text, View } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import Date from './Date'
import firebase from 'react-native-firebase'

export default class Dates extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('dates');
    this.unsubscribe = null;
    this.state = {
      dates: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    let dates = [];
    querySnapshot.forEach((doc) => {
      const {date, id} = doc.data();

      dates.push({
        key: doc.id,
        doc,
        date,
      });

      this.setState({
        dates,
      });
    })
  }

  addDate = (day) => {
    this.ref.add({
      date: day.dateString,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={this.state.dates}
            renderItem={({item}) => <Date {...item} />}
          />
        </View>
        <CalendarList
          onDayPress={this.addDate}
          /* markedDates={{[this.state.selected[0]]: {selected: true}}} */
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
