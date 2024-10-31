import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from '../tranquochuy/screens/Screen01';
import Signup from '../tranquochuy/screens/SignupScreen';
import Login from '../tranquochuy/screens/LoginScreen';
import Profile from '../tranquochuy/screens/ProfileScreen';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Screen01" component={Screen01} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />


            </Stack.Navigator>
            
        </NavigationContainer>


    );
};
export default App;