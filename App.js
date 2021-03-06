import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

	const [text, setText] = useState('Oh Yeah!!, this is amazing 😄📱');
	const [enteredGoal, setEnteredGoal] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	const [isAddMode, setIsAddMode] = useState(false);

	const goalInputHandler = (textInput)=>{
		setEnteredGoal(textInput);
	};

	const addGoalHandler = () => {
		setCourseGoals(
			[...courseGoals,
				{ id: Math.random().toString(), value: enteredGoal}
			]
		);
		setEnteredGoal('');
		setIsAddMode(false);

		console.log(`Tarea Registrada ✔️ !!`);
		// ---------
	};

	const removeGoalHandler = (goalId) =>{
		setCourseGoals(
			courseGoals => {
				return courseGoals.filter(goal => goal.id !== goalId );
			}
		);
	}

	const cancelGoalModal = () =>{
		setIsAddMode(false);
	}

	return (
		<View style={styles1.screen}>
			<Button 
				title="Add new Goal"
				onPress={() => setIsAddMode(true)}
			/>
			<Text style={{textAlign:'center'}}>{text}</Text>
			<GoalInput
				visible={isAddMode}
				goalInputHandler={goalInputHandler}
				enteredGoal={enteredGoal}
				addGoalHandler={addGoalHandler}
				onCancel={cancelGoalModal}
			/>

			<FlatList
				data={courseGoals}
				keyExtractor={(item, index) => item.id}
				renderItem={itemData =>(
					<GoalItem
						itemData={itemData}
						styles1={styles1}
						id={itemData.item.id}
						onDelete={ removeGoalHandler}
					/>
				)}
			/>
 
		</View>
	);
}
// de la pitri mitri
const styles1 = StyleSheet.create({
	screen:{
		padding: 50
	},
	inputContainer:{
		marginTop: 20
	},
	listItem:{
		padding: 10,
		marginVertical: 10,
		backgroundColor:'#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
});

const styles2 = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
