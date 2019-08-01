import React,{ Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export default class StickyNote extends Component
{
  render () 
  {
    return (
      <Card containerStyle={styles.card} title=
      {
        <view>
          <TextInput 
            placeholder="題名を入力"
            placeholderTextColor="#c7c7c7"
            multiline
            underlineColorAndroid={'rgba(0,0,0,0)'}
          />
        </view>
      }
      > 
        <TextInput 
          placeholder="内容を入力"
          placeholderTextColor="#c7c7c7"
          multiline
          underlineColorAndroid={'rgba(0,0,0,0)'}
        />
        <View style={styles.datetimeContainer}> 
          <Text>期限：</Text>
        </View>
      </Card>
    );
  }
} 

const styles = StyleSheet.create(
  {
    card:{
      backgroundColor: '#f5f99a',
    },
    datetimeContainer:{
      flexDirection: 'row',
    }
  }
);
