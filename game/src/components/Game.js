import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Answer from './Answer';

const Game = ({playNext, sum, answers}) => {
  const [selectedSum, setSelectedSum] = useState(null);
  const [status, setStatus] = useState('DEFAULT');

  useEffect(() => {
    if (!selectedSum) {
      return;
    }
    if (selectedSum === sum) {
      setStatus('WON');
    }
    if (selectedSum > sum) {
      setStatus('LOST');
    }
  }, [selectedSum, sum]);

  const handlePlay = () => {
    playNext();
  };

  const addSelectedSum = number => {
    setSelectedSum(prev => prev + number);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.sum, styles[status]]}>{sum}</Text>
      <View style={styles.answerContainer}>
        {answers.map((item, i) => (
          <Answer key={i} number={item} addSelectedSum={addSelectedSum} />
        ))}
      </View>
      <Button title="Play again" onPress={handlePlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  sum: {
    margin: 50,
    fontSize: 50,
    textAlign: 'center',
  },
  answerContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  DEFAULT: {
    backgroundColor: '#bbb',
  },
  WON: {
    backgroundColor: 'green',
  },
  LOST: {
    backgroundColor: 'red',
  },
  next: {
    marginHorizontal: 100,
    marginBottom: 30,
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: '#aaa',
  },
});

export default Game;
