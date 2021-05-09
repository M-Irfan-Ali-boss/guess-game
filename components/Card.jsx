import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children, style }) => {
	return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	card: {
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		elevation: 8,
		backgroundColor: 'white',
		padding: 15,
		borderRadius: 15,
	},
});
