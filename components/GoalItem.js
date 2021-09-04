import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const GoalItem = ({itemData, styles1, onDelete, id}) => {
	return (
		<TouchableOpacity activeOpacity={0.5} onPress={onDelete.bind(this, id)}>
			<View style={styles1.listItem} >
				<Text >{itemData.item.value}</Text>
			</View>
		</TouchableOpacity>
	 );
}

export default GoalItem;