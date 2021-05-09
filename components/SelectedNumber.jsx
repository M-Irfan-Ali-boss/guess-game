import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from './Card';
import NumberContainer from './NumberContainer';
import ButtonComponent from './ButtonComponent';
import Colors from '../constants/constant';

const SelectedNumber = ({ selectedNumber, gameHandler }) => {
	return (
		<Card style={styles.card}>
			<View style={styles.screen}>
				<Text style={styles.title}>You Selected Number</Text>
				<NumberContainer number={selectedNumber} />
				<ButtonComponent
					title='Start Game'
					style={styles.btn}
					btnColor={{ color: Colors.primary }}
					onPress={() => gameHandler(selectedNumber)}
				/>
			</View>
		</Card>
	);
};

export default SelectedNumber;

const styles = StyleSheet.create({
	card: {
		marginTop: 30,
		paddingHorizontal: 30,
	},
	screen: {
		alignItems: 'center',
	},
	btn: {
		borderColor: Colors.primary,
	},
	title: {
		fontFamily: 'Regular',
		fontSize: 18,
		color: Colors.primary,
	},
});
