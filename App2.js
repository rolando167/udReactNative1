import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

	const [text, setText] = useState('Oh Yeah!!, this is amazing 😄📱');
	const [enteredGoal, setEnteredGoal] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

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

		console.log(`salida es: ${courseGoals.toString()}`);
		// ---------
	};

	const removeGoalHandler = (goalId) =>{
		setCourseGoals(
			courseGoals => { 
				return courseGoals.filter(goal => goal.id !== goalId );
			}
		);
	}

	const onPressLearnMore = () =>{
		setText('Yeah it is');
	}

	return (
		<View style={styles1.screen}>
			<Text style={{textAlign:'center'}}>{text}</Text>
			<GoalInput
				goalInputHandler={goalInputHandler}
				enteredGoal={enteredGoal}
				addGoalHandler={addGoalHandler}
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

			<ScrollView style={styles1.inputContainer}>

				<View
						style={{
							width: '30%',
							height:100,
							padding:50,
							backgroundColor:'red',
							justifyContent:'center',
							alignItems:'center'
						}}
					>
						<Text>1sas</Text>
				</View>
				<View
						style={{ width: '30%', height:100, padding:50, backgroundColor:'blue'}}
					>
						<Text>2</Text>
				</View>
				<View
						style={{ width: '30%', height:100, padding:50, backgroundColor:'green'}}
					>
						<Text>3</Text>
				</View>
				<View
						style={{
							width: '30%',
							height:100,
							padding:50,
							backgroundColor:'black',
							justifyContent:'center',
							alignItems:'center'
						}}
					>
						<Text>4</Text>
				</View>
			 </ScrollView>
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
