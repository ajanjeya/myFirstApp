import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {



  //the actual list of goals, set to empty at beginning
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] =  useState(false);


  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }




  //handles the press on adding button by adding the enteredGoal onto a list of goals
  const addGoalHandler = goalTitle =>{
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };


  return (
    <View style = {styles.screen}>
      <Button title= "Add New Goal" onPress = { () => setIsAddMode(true)}/>

      <GoalInput visible={isAddMode} onAddGoal = {addGoalHandler}/>


      <FlatList
        keyExtractor = {(item,index) => item.id}
        data = {courseGoals}
        renderItem={itemData => <GoalItem  id= {itemData.item.id} onDelete ={removeGoalHandler} title= {itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50

  }


});
