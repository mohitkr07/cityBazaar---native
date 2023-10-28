import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/components/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
          options={({navigation, route})=>({
            title: "City Bazaar",
            headerShadowVisible: false
            
            // headerTintColor: isDarkMode ? Colors.lighter : Colors.darker
          })}
           />
          <Stack.Screen name="Second" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const HomeScreen = () => {
  return (
    <View style={styles.homescreen}>
      <Text>My Name is Mohit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homescreen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});

export default App;
