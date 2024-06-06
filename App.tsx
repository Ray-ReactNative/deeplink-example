/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Details: {id: number};
};
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const groceryItems = [
  {id: 1, name: 'Apples'},
  {id: 2, name: 'Bananas'},
  {id: 3, name: 'Oranges'},
  {id: 4, name: 'Milk'},
  {id: 5, name: 'Bread'},
];

function HomeScreen({navigation}: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Grocery List</Text>
      <FlatList
        style={styles.list}
        data={groceryItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('Details', {id: item.id})}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function DetailsScreen({navigation, route}: DetailsProps) {
  const {id} = route.params;

  return (
    <View>
      <Text>
        Item:{' '}
        {groceryItems.find(item => item.id === Number(id))?.name ?? 'Not Found'}
      </Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

/**
 * Linking Configuration
 */
const linking = {
  // Prefixes accepted by the navigation container, should match the added schemes
  prefixes: ['myapp://'],
  // Route config to map uri paths to screens
  config: {
    // Initial route name to be added to the stack before any further navigation,
    // should match one of the available screens
    initialRouteName: 'Home' as const,
    screens: {
      // myapp://home -> HomeScreen
      Home: 'home',
      // myapp://details/1 -> DetailsScreen with param id: 1
      Details: 'details/:id',
    },
  },
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  },
  touchable: {padding: 10, borderBottomWidth: 1},
  button: {
    padding: 10,
    borderBottomWidth: 1,
  },
});

export default App;
