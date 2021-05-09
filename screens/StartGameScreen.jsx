import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/constant';
import SelectedNumber from '../components/SelectedNumber';
import ButtonComponent from '../components/ButtonComponent';

const StartGameScreen = ({ gameHandler }) => {
	const [number, setNumber] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const handleNumber = (enteredNumber) => {
		setNumber(enteredNumber.replace(/[^0-9]/g, ''));
	};

	const resetNumber = () => {
		setNumber('');
		setConfirmed(false);
	};

	const confirmedHandler = () => {
		Keyboard.dismiss();
		const chooseNumber = parseInt(number);
		if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
			Alert.alert('Invalid Number', 'Number has to be between 1 nad 99', [
				{ text: 'Okay', style: 'destructive', onPress: resetNumber },
			]);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chooseNumber);
		setNumber('');
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start Game</Text>
				<Card style={styles.Wrapper}>
					<Text style={styles.WrapperTitle}>Select a Number!</Text>
					<TextInput
						style={styles.Input}
						autoCapitalize='none'
						autoCorrect={false}
						blurOnSubmit
						keyboardType='number-pad'
						maxLength={2}
						onChangeText={handleNumber}
						value={number}
						placeholder='Enter the number...'
					/>
					<View style={styles.BtnDiv}>
						<ButtonComponent
							title='Reset'
							style={styles.btn1}
							onPress={resetNumber}
							btnColor={{ color: Colors.accent }}
						/>
						<ButtonComponent
							style={styles.btn2}
							title='Confirm'
							onPress={confirmedHandler}
							btnColor={{ color: Colors.primary }}
						/>
					</View>
				</Card>
				{confirmed ? (
					<SelectedNumber
						gameHandler={gameHandler}
						selectedNumber={selectedNumber}
					/>
				) : null}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontFamily: 'Bold',
		color: Colors.primary,
		fontSize: 20,
		marginTop: 15,
		marginBottom: 30,
	},
	WrapperTitle: {
		fontFamily: 'Regular',
		color: Colors.accent,
		fontSize: 16,
		marginBottom: 20,
	},
	Input: {
		fontFamily: 'Regular',
		width: '100%',
		color: Colors.primary,
		height: 45,
		borderWidth: 1,
		borderColor: Colors.primary,
		paddingHorizontal: 10,
		borderRadius: 10,
		marginBottom: 20,
	},
	Wrapper: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	BtnDiv: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	btn1: {
		borderColor: Colors.accent,
	},
	btn2: {
		borderColor: Colors.primary,
	},
});
