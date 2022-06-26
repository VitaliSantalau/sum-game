import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getRandomNumber from '../utils/getRandomNumber';

const Game = ({ randomNumberCount }) => {

  const sum = getRandomNumber(5, 50);

  return (
    <View style={styles.container}>
      <Text style={styles.sum}>
        { sum }
      </Text>
      <Text>
        { randomNumberCount }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ddd',
  },
  sum: {
    marginHorizontal: 50,
    paddingHorizontal: 20,
    fontSize: 40,
    backgroundColor: '#aaa',
  }
})

export default Game;
