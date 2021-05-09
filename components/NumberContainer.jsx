import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/constant';

const NumberContainer = ({ number }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{number}</Text>
		</View>
	);
};

export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderWidth: 2,
		borderColor: Colors.accent,
		borderRadius: 10,
		marginVertical: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	number: {
		fontFamily: 'Regular',
		color: Colors.accent,
		fontSize: 22,
	},
});
