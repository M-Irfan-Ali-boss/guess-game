import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/constant';
import ButtonComponent from '../components/ButtonComponent';
import { SimpleLineIcons } from '@expo/vector-icons';

const GameOverScreen = ({ startAgain }) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>
				<SimpleLineIcons
					name='game-controller'
					size={30}
					color={Colors.primary}
				/>
				Game is Over!
			</Text>

			<Image
				style={styles.gameImage}
				source={require('../assets/GameOver.jpeg')}
			/>
			<ButtonComponent
				title='New Game'
				style={styles.btn}
				onPress={startAgain}
				btnColor={{ color: Colors.primary }}
			/>
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
	},
	title: {
		fontSize: 26,
		fontFamily: 'Bold',
		color: Colors.primary,
		marginBottom: 15,
	},
	gameImage: {
		width: 200,
		height: 200,
		borderRadius: 100,
		marginBottom: 30,
	},
	btn: {
		borderColor: Colors.primary,
	},
});
