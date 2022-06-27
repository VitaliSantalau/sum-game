import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getRandomNumber from '../utils/getRandomNumber';
import Answer from './Answer';

const Game = ({ randomNumberCount }) => {
  const answers = Array.from(
    {length: randomNumberCount}, (v, i) => getRandomNumber(0, 10)
  );

  const sum = answers.slice(0, randomNumberCount - 2)
    .reduce((acc, item) => acc + item, 0); 
    // TODO Shuffle the answers

  return (
    <View style={styles.container}>
      <Text style={styles.sum}>
        { sum }
      </Text>
      <View style={styles.answerContainer}>
        { 
          answers.map((item, i) =>
            <Answer key={i} number={item} />
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  sum: {
    margin: 50, 
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: '#bbb',
  },
  answerContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})

export default Game;
