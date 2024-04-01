import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import IntroductionScreen from './src/screens/IntroductionScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import SkillsScreen from './src/screens/SkillsScreen';
import OthersScreen from './src/screens/OthersScreen';

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Introduction') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Projects') {
          iconName = focused ? 'briefcase' : 'briefcase-outline';
        } else if (route.name === 'Skills') {
          iconName = focused ? 'build' : 'build-outline';
        } else if (route.name === 'Others') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="Introduction" component={IntroductionScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="Skills" component={SkillsScreen} />
      <Tab.Screen name="Others" component={OthersScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
