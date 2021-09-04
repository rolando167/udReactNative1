import React from 'react';
import { Button, Modal, TextInput, View } from 'react-native';

const GoalInput = ({goalInputHandler, enteredGoal, addGoalHandler, visible, onCancel}) => {

 
	return (
		<Modal visible={visible} animationType='slide'>
			<View style={{flex:1,  justifyContent: 'center', alignItems:'center'}}>
				<TextInput
						placeholder="Course Goals"
						onChangeText={goalInputHandler}
						value={enteredGoal}
						style={{
								width: '80%',
								borderBottomColor: 'black',
								borderBottomWidth:1,
								padding: 10
							}}
				/>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', width:'60%'}}>
					<View style={{width:'40%'}}>
						<Button
							title="CANCEL"
							color="red"
							onPress={onCancel}
						
						/>
					</View>
					<View style={{width:'40%'}}>
					<Button
						title="ADD"
						onPress={() => addGoalHandler()}
					/>
					</View>
				</View>
			</View>
		</Modal>
	 );
}

export default GoalInput