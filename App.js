import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	ScrollView,
	Image,
} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	const [loadingGif, setLoadingGif] = useState(true);
	const [fontsLoaded, setFontsLoaded] = useState(false);
	const [userNumber, setUserNumber] = useState();
	const [gameOver, setGameOver] = useState();

	const startGameHandler = (number) => {
		setUserNumber(number);
	};

	const startAgain = () => {
		setGameOver(false);
		setUserNumber();
	};

	const fetchFonts = () =>
		Font.loadAsync({
			Regular: require('./assets/fonts/Poppins-Regular.ttf'),
			Medium: require('./assets/fonts/Poppins-Medium.ttf'),
			Bold: require('./assets/fonts/Poppins-Bold.ttf'),
		});

	if (!fontsLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={console.warn}
			/>
		);
	}

	if (loadingGif) {
		setTimeout(() => {
			setLoadingGif(false);
		}, 4000);
		return (
			<View style={styles.screenLoading}>
				<Image
					style={styles.Loader}
					resizeMode='contain'
					source={require('./assets/Loader.gif')}
				/>
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.screen}>
			<Header title='Guess A Number' />
			<ScrollView>
				{userNumber ? (
					gameOver ? (
						<GameOverScreen startAgain={startAgain} />
					) : (
						<GameScreen userChoice={userNumber} setGameOver={setGameOver} />
					)
				) : (
					<StartGameScreen gameHandler={startGameHandler} />
				)}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	screenLoading: {
		flex: 1,
		backgroundColor: 'black',
	},
	Loader: {
		width: '100%',
		height: '100%',
		zIndex: 10,
	},
});
