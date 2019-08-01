import React,{ Component } from 'react';
import moment from 'moment';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export default class StickyNote extends Component {

  state = {
    isDateTimePickerVisible: false,
    limitDateTime: moment().format('YYYY年MM月DD日 HH時mm分')
  };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible : true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible : false });

  setDateTime = dateTime => 
    this.setState({ 
      limitDateTime : moment().format('YYYY年MM月DD日 HH時mm分'), 
    });

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
