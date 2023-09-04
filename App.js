import 'react-native-gesture-handler';
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import { useFonts } from 'expo-font';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import CommentsScreen from "./screens/CommentsScreen";
import IconHeader from "./components/IconHeader";
import MapScreen from "./screens/MapScreen";

const MainStack = createStackNavigator();

export default function App({ route }) {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Коментарі"
          component={CommentsScreen}
          options={{
            headerLeft: () => <IconHeader routeName={"Коментарі"} />,
          }}
        />
        <MainStack.Screen
          name="Мапа"
          component={MapScreen}
          options={{
            headerLeft: () => <IconHeader routeName={"Мапа"} />,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
