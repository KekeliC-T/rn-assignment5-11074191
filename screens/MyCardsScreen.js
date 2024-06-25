import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

const MyCardsScreen = () => {
  const { isDarkTheme } = useTheme();

  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      <Text style={[styles.text, isDarkTheme && styles.darkText]}>My Cards Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: '#2d2d2d',
  },
  text: {
    color: 'black',
  },
  darkText: {
    color: 'white',
  },
});

export default MyCardsScreen;
