import React from 'react';
import { Text, View, StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../constants/constant';

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: Platform.OS === 'ios' ? 60 : 90,
		paddingTop: Platform.OS === 'ios' ? 10 : 35,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontFamily: 'Bold',
		color: 'white',
		fontSize: 20,
	},
});

export default Header;
