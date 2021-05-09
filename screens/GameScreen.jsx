import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

import Colors from '../constants/constant';
import ButtonComponent from '../components/ButtonComponent';

const generateNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateNumber(min, max, exclude);
	} else {
		return rndNum;
	}
};

const GameScreen = ({ userChoice, setGameOver }) => {
	const [guessNum, setGuessNum] = useState(generateNumber(1, 100, userChoice));
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const guessHandler = (direction) => {
		if (
			(direction === 'lower' && guessNum < userChoice) ||
			(direction === 'greater' && guessNum > userChoice)
		) {
			Alert.alert("Don't lie", 'Your suggestion is wrong!', [
				{ text: 'Sorry', style: 'cancel' },
			]);
			return;
		}
		if (direction === 'lower') {
			currentHigh.current = guessNum;
		} else {
			currentLow.current = guessNum;
		}
		const nextNum = generateNumber(
			currentLow.current,
			currentHigh.current,
			guessNum
		);
		setGuessNum(nextNum);
	};

	useEffect(() => {
		if (guessNum == userChoice) {
			setGameOver(true);
		}
	});

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Opponent's Guess</Text>
			<NumberContainer number={guessNum} />
			<Card style={styles.card}>
				<ButtonComponent
					style={{ borderColor: Colors.accent }}
					btnColor={{ color: Colors.accent }}
					title='Lower'
					onPress={() => guessHandler('lower')}
				/>
				<ButtonComponent
					title='Greater'
					style={{ borderColor: Colors.primary }}
					btnColor={{ color: Colors.primary }}
					onPress={() => guessHandler('greater')}
				/>
			</Card>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		padding: 10,
	},
	title: {
		fontSize: 20,
		fontFamily: 'Bold',
		marginTop: 15,
		color: Colors.primary,
	},
	card: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: 300,
		maxWidth: '80%',
		marginTop: 30,
	},
});
