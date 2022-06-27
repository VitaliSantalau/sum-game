import React  from 'react';
import { Text, StyleSheet, TouchableOpacity   } from 'react-native';

const Answer = ({ number }) => {

  const handlePress = () => {
    console.log(number);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.answer}>
        { number }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  answer: {
    marginHorizontal: 15,
    marginVertical: 25,
    width: 100,
    fontSize: 35,
    textAlign: 'center',
    backgroundColor: '#999',
  },
  selected: {
    opacity: 0.3,

  }
})


export default Answer;
