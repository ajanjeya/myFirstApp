import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
  //gets the enteredGoal and setEnteredGoal function  to update the state
  const[enteredGoal, setEnteredGoal] = useState(''); //put a default empty state at the beginning
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };



  return (
    <Modal visible = {props.visible} animationType = "slide">
      <View style = {styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText= {goalInputHandler}
          value= {enteredGoal}
        />
        <Button title= "ADD" onPress = {props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  );
};


const styles=  StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  input:{
    width:200,
    borderColor:'black',
    borderBottomWidth :1,
    padding: 10,
    marginBottom: 10

  }
});


export default GoalInput;
