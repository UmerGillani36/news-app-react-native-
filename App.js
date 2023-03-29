import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import Home from "./src/components/screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./src/components/screens/Detail/Detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => App);
