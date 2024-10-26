import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from '../tranquochuy/screens/Screen01';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Screen01'>
                <Stack.Screen name="Screen01" component={Screen01} options={{headerShown: false}}/>


            </Stack.Navigator>
            
        </NavigationContainer>


    );
};
export default App;