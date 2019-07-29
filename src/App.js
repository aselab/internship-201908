import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StickyNote from './components/StickyNote';

export default class App extends React.Component{
  render() {
    return (
        <View style={styles.container}> 
          <StickyNote />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
  }  
});
